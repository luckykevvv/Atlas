export const prerender = process.env.ATLAS_DYNAMIC !== 'true';

type SteamStatus = {
	ok: boolean;
	playing: boolean;
	gameName: string | null;
	gameId: string | null;
	personaState: number | null;
	personaStateLabel: string;
	profileUrl: string | null;
	updatedAt: string;
};

type SteamPlayer = {
	profileurl?: string;
	personastate?: number;
	gameextrainfo?: string;
	gameid?: string;
};

const CACHE_TTL_MS = 45_000;
const STEAM_API_URL = 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/';
const PERSONA_STATES = ['Offline', 'Online', 'Busy', 'Away', 'Snooze', 'Looking to trade', 'Looking to play'];

let cachedStatus: SteamStatus | undefined;
let cachedAt = 0;

function fallbackStatus(personaStateLabel = 'Unavailable'): SteamStatus {
	return {
		ok: false,
		playing: false,
		gameName: null,
		gameId: null,
		personaState: null,
		personaStateLabel,
		profileUrl: null,
		updatedAt: new Date().toISOString(),
	};
}

function getPersonaStateLabel(personaState: number | undefined) {
	if (typeof personaState !== 'number') return 'Unavailable';
	return PERSONA_STATES[personaState] ?? 'Unknown';
}

async function fetchSteamStatus(): Promise<SteamStatus> {
	const apiKey = process.env.STEAM_API_KEY;
	const steamId = process.env.STEAM_ID_64;

	if (!apiKey || !steamId) {
		return fallbackStatus('Not configured');
	}

	const url = new URL(STEAM_API_URL);
	url.searchParams.set('key', apiKey);
	url.searchParams.set('steamids', steamId);

	const response = await fetch(url);
	if (!response.ok) {
		return fallbackStatus('Unavailable');
	}

	const payload = await response.json() as { response?: { players?: SteamPlayer[] } };
	const player = payload.response?.players?.[0];
	if (!player) {
		return fallbackStatus('Unavailable');
	}

	const gameName = player.gameextrainfo ?? null;
	const gameId = player.gameid ?? null;

	return {
		ok: true,
		playing: Boolean(gameName),
		gameName,
		gameId,
		personaState: typeof player.personastate === 'number' ? player.personastate : null,
		personaStateLabel: getPersonaStateLabel(player.personastate),
		profileUrl: player.profileurl ?? `https://steamcommunity.com/profiles/${steamId}`,
		updatedAt: new Date().toISOString(),
	};
}

export async function GET() {
	const now = Date.now();
	if (cachedStatus && now - cachedAt < CACHE_TTL_MS) {
		return Response.json(cachedStatus);
	}

	try {
		cachedStatus = await fetchSteamStatus();
		cachedAt = now;
		return Response.json(cachedStatus);
	} catch {
		const status = fallbackStatus('Unavailable');
		cachedStatus = status;
		cachedAt = now;
		return Response.json(status);
	}
}

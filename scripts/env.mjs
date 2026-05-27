import { existsSync, readFileSync } from 'node:fs';

export function readEnvFile(path = '.env') {
	if (!existsSync(path)) return {};

	return Object.fromEntries(
		readFileSync(path, 'utf8')
			.split(/\r?\n/)
			.map((line) => line.trim())
			.filter((line) => line && !line.startsWith('#') && line.includes('='))
			.map((line) => {
				const index = line.indexOf('=');
				const key = line.slice(0, index).trim();
				const value = line.slice(index + 1).trim().replace(/^['"]|['"]$/g, '');
				return [key, value];
			}),
	);
}

export function dynamicEnv() {
	return {
		...process.env,
		...readEnvFile(),
		ATLAS_DYNAMIC: 'true',
	};
}

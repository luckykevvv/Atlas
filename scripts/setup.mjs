import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = createInterface({ input, output });

function run(command, args) {
	return new Promise((resolve, reject) => {
		const child = spawn(
			process.platform === 'win32' ? 'cmd.exe' : command,
			process.platform === 'win32' ? ['/c', command, ...args] : args,
			{
				stdio: 'inherit',
				shell: false,
				env: process.env,
			},
		);

		child.on('exit', (code) => {
			if (code === 0) resolve();
			else reject(new Error(`${command} ${args.join(' ')} failed with exit code ${code}.`));
		});
		child.on('error', reject);
	});
}

async function askChoice(prompt, choices) {
	console.log(prompt);
	choices.forEach((choice, index) => {
		console.log(`  ${index + 1}. ${choice.label}`);
	});

	while (true) {
		const answer = (await promptLine('Select an option: ')).trim();
		const index = Number(answer) - 1;
		if (choices[index]) return choices[index].value;
		console.log('Please enter a valid number.');
	}
}

async function promptLine(prompt) {
	try {
		return await rl.question(prompt);
	} catch (error) {
		if (error?.code === 'ERR_USE_AFTER_CLOSE') return '';
		throw error;
	}
}

async function askYesNo(prompt, defaultValue = false) {
	const suffix = defaultValue ? 'Y/n' : 'y/N';
	const answer = (await promptLine(`${prompt} (${suffix}): `)).trim().toLowerCase();
	if (!answer) return defaultValue;
	return answer === 'y' || answer === 'yes';
}

async function commandExists(command, args = ['--version']) {
	try {
		await run(command, args);
		return true;
	} catch {
		return false;
	}
}

async function setupStatic() {
	console.log('\nInstalling static dependencies...');
	await run('npm', ['install', '--omit=optional']);
	console.log('\nStatic setup complete.');
	console.log('Next commands:');
	console.log('  npm run dev');
	console.log('  npm run build');
	console.log('  npm run preview');
}

async function setupDynamic() {
	console.log('\nInstalling dynamic server dependencies...');
	await run('npm', ['install']);

	console.log('\nDynamic setup complete.');
	console.log('Configure these environment variables on your server:');
	console.log('  STEAM_API_KEY=your_steam_web_api_key');
	console.log('  STEAM_ID_64=your_64_bit_steam_id');
	console.log('  HOST=0.0.0.0');
	console.log('  PORT=4321');
	console.log('  ATLAS_DATA_DIR=.atlas-data');
	console.log('\nA template is available at .env.example. Do not commit a real .env file.');

	const startPm2 = await askYesNo('\nBuild and start with PM2 now?', false);
	if (!startPm2) {
		console.log('\nNext commands:');
		console.log('  npm run dev:dynamic');
		console.log('  npm run build:dynamic');
		console.log('  npm run start');
		console.log('  npm run pm2:start');
		return;
	}

	const hasPm2 = await commandExists('pm2');
	if (!hasPm2) {
		const installPm2 = await askYesNo('PM2 is not installed. Install it globally with npm?', false);
		if (!installPm2) {
			console.log('\nPM2 was not installed. Run npm run build:dynamic && npm run start instead.');
			return;
		}
		await run('npm', ['install', '-g', 'pm2']);
	}

	await run('npm', ['run', 'pm2:start']);
	console.log('\nPM2 started. Useful commands:');
	console.log('  pm2 logs atlas-dynamic');
	console.log('  npm run pm2:restart');
	console.log('  npm run pm2:stop');
}

try {
	console.log('Atlas setup');
	if (!existsSync('package.json')) {
		throw new Error('Run this script from the project root.');
	}

	const mode = await askChoice('\nChoose install mode:', [
		{ label: 'Static site only', value: 'static' },
		{ label: 'Dynamic server with Steam status', value: 'dynamic' },
	]);

	if (mode === 'dynamic') await setupDynamic();
	else await setupStatic();
} catch (error) {
	console.error(`\nSetup failed: ${error.message}`);
	process.exitCode = 1;
} finally {
	rl.close();
}

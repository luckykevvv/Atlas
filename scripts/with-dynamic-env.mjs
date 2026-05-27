import { spawn } from 'node:child_process';
import { join } from 'node:path';
import { dynamicEnv } from './env.mjs';

const [command, ...args] = process.argv.slice(2);

if (!command) {
	console.error('Usage: node scripts/with-dynamic-env.mjs <command> [...args]');
	process.exit(1);
}

const resolvedCommand = command === 'astro' ? process.execPath : command;
const resolvedArgs = command === 'astro' ? [join('node_modules', 'astro', 'bin', 'astro.mjs'), ...args] : args;

const child = spawn(resolvedCommand, resolvedArgs, {
	stdio: 'inherit',
	shell: false,
	env: dynamicEnv(),
});

child.on('exit', (code) => {
	process.exit(code ?? 0);
});

child.on('error', (error) => {
	console.error(error.message);
	process.exit(1);
});

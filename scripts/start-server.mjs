import { spawn } from 'node:child_process';
import { dynamicEnv } from './env.mjs';

const env = dynamicEnv();

console.log(`Starting Atlas on ${env.HOST || '::'}:${env.PORT || '4321'}`);

const child = spawn(process.execPath, ['./dist/server/entry.mjs'], {
	stdio: 'inherit',
	env,
});

child.on('exit', (code) => {
	process.exit(code ?? 0);
});

child.on('error', (error) => {
	console.error(error.message);
	process.exit(1);
});

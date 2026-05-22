module.exports = {
	apps: [
		{
			name: 'atlas-dynamic',
			script: 'npm',
			args: 'run dev:host',
			env: {
				NODE_ENV: 'development',
			},
		},
	],
};

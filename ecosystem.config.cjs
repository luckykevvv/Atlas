module.exports = {
	apps: [
		{
			name: 'atlas-dynamic',
			script: 'npm',
			args: 'run start',
			env: {
				NODE_ENV: 'production',
				ATLAS_DYNAMIC: 'true',
				HOST: process.env.HOST || '0.0.0.0',
				PORT: process.env.PORT || '4321',
			},
		},
	],
};

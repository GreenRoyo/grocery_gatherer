module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{js,html,jpg,ico,ttf,png,json}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
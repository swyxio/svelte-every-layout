const purgecss = require('@fullhuman/postcss-purgecss')({
	content: [
		'./src/**/*.pug',
		'./src/**/*.html',
		'./src/**/*.svelte',
		'./src/**/*.ts'
	],
	defaultExtractor: content => {
		const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g)
		const matchedTokens = []

		let match = regExp.exec(content)

		while (match) {
			if (match[0].startsWith('class:')) matchedTokens.push(match[0].substring(6))
			else matchedTokens.push(match[0])
			match = regExp.exec(content)
		}

		return matchedTokens
	}
})

module.exports = {
	plugins: [
		require('postcss-import'),
		require('tailwindcss'),
		require('autoprefixer'),
		...process.env.NODE_ENV === 'production' ? [purgecss] : []
	]
}

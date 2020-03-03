module.exports = {
	theme: {
		extend: { colors: { primary: '#292929' } },
		fontFamily: {
			display: [
				'Inconsolata',
				'monospace'
			],
			body: [
				'Inconsolata',
				'monospace'
			]
		},
		fontSize: {
			sm: '.5rem',
			base: '1rem',
			lg: '1.5rem',
			xl: '2rem',
			'2xl': '2.5rem',
			'3xl': '3rem',
			'4xl': '3.5rem',
			'5xl': '4rem',
			'6xl': '4.5rem',
			'7xl': '5rem'
		},
		spacing: {
			0: 0,
			1: '0.0625rem',
			2: '0.125rem',
			4: '0.25rem',
			8: '.5rem',
			16: '1rem',
			24: '1.5rem',
			32: '2rem',
			40: '2.5rem',
			48: '3rem',
			56: '3.5rem',
			64: '4rem',
			72: '4.5rem',
			80: '5rem',
			88: '5.5rem',
			96: '6rem'
		}
	},
	variants: [
		'responsive',
		'group-hover',
		'focus-within',
		'first',
		'last',
		'odd',
		'even',
		'hover',
		'focus',
		'active',
		'visited',
		'disabled'
	]
}

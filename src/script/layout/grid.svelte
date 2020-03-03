<script context='module'>
	import {EveryLayout} from './index.ts'

	const layouts = new EveryLayout()
</script>

<script>
	/**
	* @component Grid
	* @description
	* A component for creating a responsive grid using the CSS Grid module
	* @property {string} min=20rem (320px with a root font-size of 16px) A CSS length value representing x in `minmax(min(x, 100%), 1fr)`
	* @property {string} space=var(--s0) The space between grid cells
	*/
	import {onDestroy, onMount} from 'svelte'

	export let min = '20rem'
	export let space = 'var(--s0)'

	let ref = void 0
	let instance = void 0
	let ro = void 0

	onMount(() => {
		instance = layouts.mount({
			el: ref,
			props: {
				min,
				space
			},
			name: 'Grid',
			styleFn: ({id, props}) => `
				div[data-id=${id}] {
					align-content: start;
					display: grid;
					grid-gap: ${props.space};
					grid-template-columns: 100%;
				}

				div[data-id=${id}].-above {
					grid-template-columns: repeat(auto-fit, minmax(${props.min}, 1fr));
				}

				@supports (width: min(${props.min}, 100%)) {
					div[data-id=${id}] {
						grid-gap: ${props.space};
						grid-template-columns: repeat(auto-fill, minmax(min(${props.min}, 100%), 1fr));
					}
				}
				`.replace(/\s\s+/g, ' ').trim()
		})

		if ('ResizeObserver' in window && !CSS.supports('width', `min(${min}, 100%)`)) {
			const test = document.createElement('div')

			test.classList.add('test')
			test.style.width = min
			ref.appendChild(test)
			const br = test.offsetWidth

			ref.removeChild(test)

			ro = new ResizeObserver(entries => {
				for (const entry of entries) {
					const cr = entry.contentRect
					const q = cr.width > br

					ref.classList.toggle('-above', q)
				}
			})

			ro.observe(ref)
		}
	})

	onDestroy(() => {
		layouts.destroy(instance)
		if (ro) ro.disconnect()
	})

	$: min, space, instance && (() => {
		layouts.onPropsUpdate(instance, {min, space})
	})()
</script>

<div bind:this={ref} class={$$props.class} style={$$props.style}>
	<slot></slot>
</div>

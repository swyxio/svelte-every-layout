<script context='module'>
	import {EveryLayout} from './index.ts'

	const layouts = new EveryLayout()
</script>

<script>
	/**
	 * @component Imposter
	 * @description
	 * A component to be positioned absolutely over any element
	 * @property {boolean} breakout=false Whether the element is allowed to break out of the container over which it is positioned
	 * @property {string} margin=0 The minimum space between the element and the inside edges of the positioning container over which it is placed (where `breakout` is not applied)
	 * @property {string} fixed=false Whether to position the element relative to the viewport
	 */
	import {onDestroy, onMount} from 'svelte'

	export let breakout = false
	export let fixed = false
	export let margin = '0px'

	let ref = void 0
	let instance = void 0

	onMount(() => {
		instance = layouts.mount({
			el: ref,
			props: {
				breakout,
				fixed,
				margin
			},
			name: 'Imposter',
			styleFn: ({id, props}) => `
				div[data-id=${id}] {
					position: relative;
				}

				div[data-id=${id}] > [slot='imposter'] {
					left: 50%;
					${props.breakout ? '' : `max-width: calc(100% - (${props.margin} * 2));`}
					${props.breakout ? '' : `max-height: calc(100% - (${props.margin} * 2));`}
					${props.breakout ? '' : 'overflow: auto;'}
					${props.fixed ? 'position: fixed;' : 'position: absolute;'}
					top: 50%;
					transform: translate(-50%, -50%);
				}
				`.replace(/\s\s+/g, ' ').trim()
		})
	})

	onDestroy(() => {layouts.destroy(instance)})

	$: breakout, fixed, margin, instance && (() => {
		layouts.onPropsUpdate(instance, {breakout, fixed, margin})
	})()
</script>

<div bind:this={ref} class={$$props.class} style={$$props.style}>
	<slot name='content'></slot>
	<slot name='imposter'></slot>
</div>

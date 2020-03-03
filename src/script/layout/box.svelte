<script context='module'>
	import {EveryLayout} from './index.ts'

	const layouts = new EveryLayout()
</script>

<script>
	/**
	* @component Box
	* @description
	* A component for generic boxes/containers
	* @property {string} borderWidth=var(--border-thin) A CSS `border-width` value
	* @property {string} padding=var(--s1) A CSS `padding` value
	*/
	import {onDestroy, onMount} from 'svelte'

	export let borderWidth = 'var(--border-thin)'
	export let padding = 'var(--s1)'

	let ref = void 0
	let instance = void 0

	onMount(() => {
		instance = layouts.mount({
			el: ref,
			props: {
				borderWidth,
				padding
			},
			name: 'Box',
			styleFn: ({id, props}) => `
				div[data-id=${id}] {
					border-width: ${props.borderWidth};
					display: block;
					outline: ${props.borderWidth} solid transparent;
					outline-offset: calc(${props.borderWidth} * -1);
					padding: ${props.padding};
				}
				`.replace(/\s\s+/g, ' ').trim()
		})
	})

	onDestroy(() => {layouts.destroy(instance)})

	$: borderWidth, padding, instance && (() => {
		layouts.onPropsUpdate(instance, {borderWidth, padding})
	})()
</script>

<div bind:this={ref} class={$$props.class} style={$$props.style}>
	<slot></slot>
</div>

<script context='module'>
	import {EveryLayout} from './index.ts'

	const layouts = new EveryLayout()
</script>

<script>
	/**
	* @component Switcher
	* @description
	* A component for switching directly between horizontal and vertical layouts at a given (container width-based) breakpoint or 'threshold'
	* @property {integer} limit=4 A number representing the maximum number of items permitted for a horizontal layout
	* @property {string} space=var(--s1) A CSS `margin` value
	* @property {string} threshold=var(--measure) A CSS `width` value (representing the 'container breakpoint')
	*/
	import {onDestroy, onMount} from 'svelte'

	export let limit = 0
	export let space = 'var(--s1)'
	export let threshold = 'var(--measure)'

	let ref = void 0
	let instance = void 0

	onMount(() => {
		instance = layouts.mount({
			el: ref,
			props: {
				limit,
				space,
				threshold
			},
			name: 'Switcher',
			styleFn: ({id, props}) => `
				div[data-id=${id}] {
					display: block;
					overflow: hidden;
				}

				div[data-id=${id}] > * {
					display: flex;
					flex-wrap: wrap;
					margin: calc((${props.space} / 2) * -1);
					overflow: hidden;
				}

				div[data-id=${id}] > * > * {
					flex-basis: calc((${props.threshold} - (100% - ${props.space})) * 999);
					flex-grow: 1;
					margin: calc(${props.space} / 2);
				}

				${limit ? `
					div[data-id=${id}] > * > :nth-last-child(n+${parseInt(props.limit, 10) + 1}),
					div[data-id=${id}] > * > :nth-last-child(n+${parseInt(props.limit, 10) + 1}) ~ * {
						flex-basis: 100%;
					}` : ''}
				`.replace(/\s\s+/g, ' ').trim()
		})
	})

	onDestroy(() => {layouts.destroy(instance)})

	$: limit, space, threshold, instance && (() => {
		layouts.onPropsUpdate(instance, {limit, space, threshold})
	})()
</script>

<div bind:this={ref} class={$$props.class} style={$$props.style}>
	<div>
		<slot></slot>
	</div>
</div>

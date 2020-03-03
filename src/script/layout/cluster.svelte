<script context='module'>
	import {EveryLayout} from './index.ts'

	const layouts = new EveryLayout()
</script>

<script>
	/**
	* @component Cluster
	* @description
	* A component for grouping items, with control over the margin between them
	* @property {string} align=center A CSS `align-items` value
	* @property {string} justify=center A CSS `justify-content` value
	* @property {string} space=var(--s1) A CSS `margin` value. The minimum space between the clustered child elements.
	*/
	import {onDestroy, onMount} from 'svelte'

	export let align = 'center'
	export let justify = 'center'
	export let space = 'var(--s1)'

	let ref = void 0
	let instance = void 0

	onMount(() => {
		instance = layouts.mount({
			el: ref,
			props: {
				align,
				justify,
				space
			},
			name: 'Cluster',
			styleFn: ({id, props}) => `
				div[data-id=${id}] {
					overflow: hidden;
				}

				div[data-id=${id}] > * {
					align-items: ${props.align};
					display: flex;
					flex-wrap: wrap;
					justify-content: ${props.justify};
					margin: calc(${props.space} / 2 * -1);
				}

				div[data-id=${id}] > * > * {
					margin: calc(${props.space} / 2);
				}
				`.replace(/\s\s+/g, ' ').trim()
		})
	})

	onDestroy(() => {layouts.destroy(instance)})

	$: align, justify, space, instance && (() => {
		layouts.onPropsUpdate(instance, {align, justify, space})
	})()
</script>

<div bind:this={ref} class={$$props.class} style={$$props.style}>
	<div>
		<slot></slot>
	</div>
</div>

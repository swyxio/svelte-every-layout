<script context='module'>
	import {EveryLayout} from './index.ts'

	const layouts = new EveryLayout()
</script>

<script>
	/**
	* @component Sidebar
	* @description
	* A component for for placing two elements side-by-side. If space permits, the sidebar element has a set width, and the companion takes up the rest of the available horizontal space. If not, the elements are collapsed into a single column, each taking up 100% of the horizontal space.
	* @property {string} contentMin=50% A CSS **percentage** value. The minimum width of the content element in the horizontal configuration
	* @property {boolean} noStretch=false Make the adjacent elements adopt their natural height
	* @property {string} side=left Which element to treat as the sidebar (all values but "left" are considered "right")
	* @property {string} sideWidth Represents the width of the sidebar _when_ adjacent. If not set (`null`) it defaults to the sidebar's content width
	* @property {string} space=var(--s1) A CSS margin value representing the space between the two elements
	*/
	import {onDestroy, onMount} from 'svelte'

	export let contentMin = '50%'
	export let noStretch = false
	export let side = 'left'
	export let sideWidth = 'auto'
	export let space = 'var(--s1)'

	let ref = void 0
	let instance = void 0

	onMount(() => {
		instance = layouts.mount({
			el: ref,
			props: {
				contentMin,
				noStretch,
				side,
				sideWidth,
				space
			},
			name: 'Sidebar',
			styleFn: ({id, props}) => `
				div[data-id=${id}] {
					overflow: hidden;
				}

				div[data-id=${id}] > * {
					${props.noStretch ? 'align-items: flex-start;' : ''}
					display: flex;
					flex-wrap: wrap;
					margin: calc(${props.space} / 2 * -1);
				}

				div[data-id=${id}] > * > * {
					margin: calc(${props.space} / 2);
					${props.sideWidth ? `flex-basis: ${props.sideWidth};` : ''}
					flex-grow: 1;
				}

				div[data-id=${id}] > * > ${props.side === 'left' ? ':last-child' : ':first-child'} {
					flex-basis: 0;
					flex-grow: 999;
					min-width: calc(${props.contentMin} - ${props.space});
				}
				`.replace(/\s\s+/g, ' ').trim()
		})
	})

	onDestroy(() => {layouts.destroy(instance)})

	$: contentMin, noStretch, side, sideWidth, space, instance && (() => {
		layouts.onPropsUpdate(instance, {contentMin, noStretch, side, sideWidth, space})
	})()
</script>

<div bind:this={ref} class={$$props.class} style={$$props.style}>
	<div>
		<slot></slot>
	</div>
</div>

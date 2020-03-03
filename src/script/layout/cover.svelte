<script context='module'>
	import {EveryLayout} from './index.ts'

	const layouts = new EveryLayout()
</script>

<script>
	/**
	* @component Cover
	* @description
	* A component for covering a block-level element horizontally,
	* with a max-width value representing the typographic measure
	* @property {string} centered=h1 A simple selector such an element or class selector, representing the centered (main) element in the cover
	* @property {string} minHeight=100% The minimum height for the **Cover**
	* @property {boolean} noPad=false Whether the spacing is also applied as padding to the container element
	* @property {string} space=var(--s1) The minimum space between and around all of the child elements
	*/
	import {onDestroy, onMount} from 'svelte'

	export let centered = ':nth-child(1)'
	export let space = 'var(--s1)'
	export let minHeight = '100%'
	export let noPad = false

	let ref = void 0
	let instance = void 0

	onMount(() => {
		instance = layouts.mount({
			el: ref,
			props: {
				centered,
				space,
				minHeight,
				noPad
			},
			name: 'Cover',
			styleFn: ({id, props}) => `
				div[data-id=${id}] {
					display: flex;
					flex-direction: column;
					min-height: ${props.minHeight};
					padding: ${props.noPad ? '0' : props.space};
				}

				div[data-id=${id}] > * {
					margin-top: ${props.space};
					margin-bottom: ${props.space};
				}

				${centered ? `
					div[data-id=${id}] > :first-child:not(${props.centered}) {
						margin-top: 0;
					}

					div[data-id=${id}] > :last-child:not(${props.centered}) {
						margin-bottom: 0;
					}

					div[data-id=${id}] > ${props.centered} {
						margin-top: auto;
						margin-bottom: auto;
					}` : ''}
					`.replace(/\s\s+/g, ' ').trim()
		})
	})

	onDestroy(() => {layouts.destroy(instance)})

	$: centered, space, minHeight, noPad, instance && (() => {
		layouts.onPropsUpdate(instance, {centered, space, minHeight, noPad})
	})()
</script>

<div bind:this={ref} class={$$props.class} style={$$props.style}>
	<slot></slot>
</div>

<script context='module'>
	import {EveryLayout} from './index.ts'

	const layouts = new EveryLayout()
</script>

<script>
	/**
	* @component Center
	* @description
	* A component for centering a block-level element horizontally,
	* with a max-width value representing the typographic measure
	* @property {boolean} andText=false center align the text too (`text-align: center`)
	* @property {boolean} gutters=0 The minimum space on either side of the content
	* @property {boolean} intrinsic=false Center child elements based on their content width
	* @property {string} max=var(--measure) A CSS `max-width` value
	*/
	import {onDestroy, onMount} from 'svelte'

	export let andText = false
	export let gutters = '0'
	export let intrinsic = false
	export let max = 'var(--measure)'

	let ref = void 0
	let instance = void 0

	onMount(() => {
		instance = layouts.mount({
			el: ref,
			props: {
				andText,
				gutters,
				intrinsic,
				max
			},
			name: 'Center',
			styleFn: ({id, props}) => `
				div[data-id=${id}] {
					${props.intrinsic ? 'align-items: center;' : ''}
					box-sizing: content-box;
					${props.intrinsic ? 'display: flex;' : 'display: block;'}
					${props.intrinsic ? 'flex-direction: column;' : ''}
					margin-left: auto;
					margin-right: auto;
					${props.max ? `max-width: ${props.max};` : ''}
					${props.gutters ? `padding-left: ${props.gutters};` : ''}
					${props.gutters ? `padding-right: ${props.gutters};` : ''}
					${props.andText ? 'text-align: center;' : ''}
				}
				`.replace(/\s\s+/g, ' ').trim()
		})
	})

	onDestroy(() => {layouts.destroy(instance)})

	$: andText, gutters, intrinsic, max, instance && (() => {
		layouts.onPropsUpdate(instance, {andText, gutters, intrinsic, max})
	})()
</script>

<div bind:this={ref} class={$$props.class} style={$$props.style}>
	<slot></slot>
</div>

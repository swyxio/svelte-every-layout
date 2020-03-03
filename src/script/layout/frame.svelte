<script context='module'>
	import {EveryLayout} from './index.ts'

	const layouts = new EveryLayout()
</script>

<script>
	/**
	* @component Frame
	* @description
	* A component for augmenting image ratios
	* with a max-width value representing the typographic measure
	* @property {string} ratio=16:9 The element's aspect ratio
	*/
	import {onDestroy, onMount} from 'svelte'

	export let ratio = '16:9'

	let ref = void 0
	let instance = void 0

	onMount(() => {
		instance = layouts.mount({
			el: ref,
			props: {ratio},
			name: 'Frame',
			styleFn: ({id, props}) => {
				const [width, height] = props.ratio.split(':')

				return `
					div[data-id=${id}] {
						display: block;
						padding-bottom: calc(${height} / ${width} * 100%);
						position: relative;
					}

					div[data-id=${id}] > * {
						align-items: center;
						bottom: 0;
						display: flex;
						justify-content: center;
						left: 0;
						overflow: auto;
						position: absolute;
						right: 0;
						top: 0;
					}

					div[data-id=${id}] > img,
					div[data-id=${id}] > video {
						height: 100%;
						object-fit: cover;
						width: 100%;
					}
					`.replace(/\s\s+/g, ' ').trim()
			}
		})
	})

	onDestroy(() => {layouts.destroy(instance)})

	$: ratio, instance && (() => {
		layouts.onPropsUpdate(instance, {ratio})
	})()
</script>

<div bind:this={ref} class={$$props.class} style={$$props.style}>
	<slot></slot>
</div>

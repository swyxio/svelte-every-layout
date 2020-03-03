<script context='module'>
	import {EveryLayout} from './index.ts'

	const layouts = new EveryLayout()
</script>

<script>
	/**
	* @component Stack
	* @description
	* A component for injecting white space (margin) between flow
	* (block) elements along a vertical axis.
	* @property {boolean} recursive=false Whether the spaces apply recursively (i.e. regardless of nesting level)
	* @property {string} space=var(--s1) A CSS `margin` value
	* @property {number} splitAfter=null The element after which to _split_ the stack with an auto margin
	*/
	import {onDestroy, onMount} from 'svelte'

	export let recursive = false
	export let space = 'var(--s1)'
	export let splitAfter = null

	let ref = void 0
	let instance = void 0

	onMount(() => {
		instance = layouts.mount({
			el: ref,
			props: {
				recursive,
				space,
				splitAfter
			},
			name: 'Stack',
			styleFn: ({id, props}) => `
				div[data-id=${id}] {
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
				}

				div[data-id=${id}]${props.recursive ? '' : ' >'} * + * { margin-top: ${props.space}; }

				${props.splitAfter ? `
					div[data-id=${id}]:only-child { height: 100%; }
					div[data-id=${id}] > :nth-child(${props.splitAfter}) { margin-bottom: auto; }
				` : ''}
				`.replace(/\s\s+/g, ' ').trim()
		})
	})

	onDestroy(() => {layouts.destroy(instance)})

	$: recursive, space, splitAfter, instance && (() => {
		layouts.onPropsUpdate(instance, {recursive, space, splitAfter})
	})()
</script>

<div bind:this={ref} class={$$props.class} style={$$props.style}>
	<slot></slot>
</div>

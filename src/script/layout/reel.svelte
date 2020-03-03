<script context='module'>
	import {EveryLayout} from './index.ts'

	const layouts = new EveryLayout()
</script>

<script>
	/**
	* @component Reel
	* @description
	* A component for generic boxes/containers
	* @property {string} height=auto The height of the Reel itself
	* @property {string} itemWidth=auto The width of each item (child element) in the Reel
	* @property {boolean} noBar=false Whether to display the scrollbar
	* @property {string} snap=both The axis to snap scrolling on
	* @property {string} snapAlign=start The alignment to snap each item to
	* @property {string} space=var(--s0) The space between Reel items (child elements)
	*/
	import {onDestroy, onMount} from 'svelte'

	export let height = 'auto'
	export let itemWidth = 'auto'
	export let noBar = false
	export let snap = true
	export let snapAlign = 'start'
	export let space = 'var(--s0)'

	let ref = void 0
	let instance = void 0
	let ro = void 0
	let mo = void 0

	onMount(() => {
		instance = layouts.mount({
			el: ref,
			props: {
				height,
				itemWidth,
				noBar,
				snap,
				snapAlign,
				space
			},
			name: 'Box',
			styleFn: ({id, props}) => `
				div[data-id=${id}] {
					display: flex;
					height: ${props.height};
					overflow: auto hidden;
					scrollbar-color: var(--color-light) var(--color-dark);
					${props.snap ? 'scroll-snap-type: x mandatory;' : ''}
					${props.noBar ? 'scrollbar-width: none;' : ''}
				}

				div[data-id=${id}]:focus {
					outline-color: var(--color-darkish);
					outline-style: solid;
				}

				div[data-id=${id}] > * {
					flex: 0 0 ${props.itemWidth};
					${props.snapAlign ? `scroll-snap-align: ${props.snapAlign};` : ''}
				}

				div[data-id=${id}] > img {
					height: 100%;
					flex-basis: auto;
					width: auto;
				}

				div[data-id=${id}] > * + * {
					margin-left: ${props.space};
				}

				${props.noBar ? `
					div[data-id=${id}]::-webkit-scrollbar {
						display: none;
					}` : ''}
					`.replace(/\s\s+/g, ' ').trim()
		})

		const toggleTabIndex = el => {el.setAttribute('tabindex', el.scrollWidth > el.clientWidth ? '0' : '-1')}

		if ('ResizeObserver' in window) ro = new ResizeObserver(entries => toggleTabIndex(entries[0].target)).observe(ref)
		if ('MutationObserver' in window) mo = new MutationObserver(entries => toggleTabIndex(entries[0].target)).observe(ref, {childList: true})
	})

	onDestroy(() => {
		layouts.destroy(instance)
		if (ro) ro.disconnect()
		if (mo) mo.disconnect()
	})

	$: height, itemWidth, noBar, snap, snapAlign, space, instance && (() => {
		layouts.onPropsUpdate(instance, {height, itemWidth, noBar, snap, snapAlign, space})
	})()
</script>

<div bind:this={ref} class={$$props.class} style={$$props.style}>
	<slot></slot>
</div>

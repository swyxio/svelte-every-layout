<script context='module'>
	import {writable} from 'svelte/store'

	export const controlledProps = writable({})
</script>

<script>
	export let props = []
	export let name = 'Controller'

	const propObjs = Object.keys(props).map(p => ({
		name: p,
		type: typeof props[p],
		value: props[p]
	}))
	const previousPropObjs = [...propObjs]

	$: propObjs, controlledProps.set(Object.values(propObjs).reduce((obj, prop) => (previousPropObjs[prop.name] !== prop.value) && ({ ...obj, [prop.name]: prop.value }), {}))
</script>

<div class='border-white border-8 bg-black text-white'>
	<p class='font-bold text-center text-lg'>{name}</p>
	{#each propObjs as prop}
	<div class='flex items-center p-8'>
		<span class='w-1/2 text-right font-bold mr-8'>{prop.name}:</span>
		{#if prop.type === 'boolean'}
		<input type='checkbox' bind:checked={prop.value} />
		{:else}
		<input type='text' bind:value={prop.value} class='w-1/2 text-white bg-transparent' />
		{/if}
	</div>
	{/each}
</div>

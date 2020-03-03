<script>
	import PageContainer from '../components/page-container.svelte'
	import * as Layout from '../layout/index.ts'
	import Controller, {controlledProps} from '../components/controller.svelte'

	const props = {
		min: '20rem',
		space: 'var(--s0)'
	}
</script>

<PageContainer>
	<Controller name='The Grid' {props} />

	<Layout.Grid {...$controlledProps}>
		<div class='bg-black text-white'>This is The Grid</div>
		<div class='bg-gray-500 text-white'>This is The Grid</div>
		<div class='bg-black text-white'>This is The Grid</div>
		<div class='bg-gray-500 text-white'>This is The Grid</div>
		<div class='bg-black text-white'>This is The Grid</div>
		<div class='bg-gray-500 text-white'>This is The Grid</div>
	</Layout.Grid>
</PageContainer>

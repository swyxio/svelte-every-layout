<script>
	import PageContainer from '../components/page-container.svelte'
	import * as Layout from '../layout/index.ts'
	import Controller, {controlledProps} from '../components/controller.svelte'

	const props = {
		andText: false,
		gutters: '0',
		intrinsic: false,
		max: 'var(--measure)'
	}
</script>

<PageContainer>
	<Controller name='The Center' {props} />

	<Layout.Center class='bg-black text-white' {...$controlledProps}>
		<div class='bg-gray-500 text-black'>This is The Center</div>
		<div class='bg-gray-500 text-black'>This is The Center</div>
		<div class='bg-gray-500 text-black'>This is The Center</div>
	</Layout.Center>
</PageContainer>

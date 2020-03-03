<script>
	import PageContainer from '../components/page-container.svelte'
	import * as Layout from '../layout/index.ts'
	import Controller, {controlledProps} from '../components/controller.svelte'

	const props = {
		contentMin: '50%',
		noStretch: false,
		side: 'left',
		sideWidth: 'auto',
		space: '1rem'
	}
</script>

<PageContainer>
	<Controller name='The Sidebar' {props} />

	<Layout.Sidebar {...$controlledProps}>
		<div class='bg-black text-white'>This is The Sidebar</div>
		<div class='bg-black text-white'>This is The Content</div>
	</Layout.Sidebar>
</PageContainer>

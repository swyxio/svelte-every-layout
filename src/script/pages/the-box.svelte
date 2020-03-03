<script>
	import PageContainer from '../components/page-container.svelte'
	import * as Layout from '../layout/index.ts'
	import Controller, {controlledProps} from '../components/controller.svelte'

	const props = {
		borderWidth: '1rem',
		padding: '1rem'
	}
</script>

<PageContainer>
	<Controller name='The Box' {props} />

	<Layout.Box {...$controlledProps} class='border-black'>
		This is The Box
	</Layout.Box>
</PageContainer>

<script>
	import PageContainer from '../components/page-container.svelte'
	import * as Layout from '../layout/index.ts'
	import Controller, {controlledProps} from '../components/controller.svelte'

	const props = {ratio: '9:16'}
</script>

<PageContainer>
	<Controller name='The Frame' {props} />

	<Layout.Frame {...$controlledProps}>
		<img src='https://absolutely.every-layout.dev/images/placeholders/1.jpg' alt='Beijing highway from bridge at night' loading='lazy'>
	</Layout.Frame>
</PageContainer>

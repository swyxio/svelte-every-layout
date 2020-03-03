<script>
	import PageContainer from '../components/page-container.svelte'
	import * as Layout from '../layout/index.ts'
	import Controller, {controlledProps} from '../components/controller.svelte'

	const props = {
		recursive: false,
		space: 'var(--s1)',
		splitAfter: null
	}
</script>

<PageContainer>
	<Controller name='The Stack' {props} />

	<Layout.Stack {...$controlledProps} style='height: 50vh;' class='border border-black'>
		<div class='border border-black'>This is The Stack</div>
		<div class='border border-black'>This is The Stack</div>
		<div class='border border-black'>This is The Stack</div>
		<div class='border border-black' style='height: 300px;'>
			<div class='border border-black'>This is The Stack</div>
			<div class='border border-black'>This is The Stack</div>
		</div>
	</Layout.Stack>
</PageContainer>

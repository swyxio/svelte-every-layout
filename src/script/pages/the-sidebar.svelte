<script>
	import PageContainer from '../components/page-container.svelte'
	import * as Layout from '../layout/index.ts'
	import Controller, {controlledProps} from '../components/controller.svelte'

	const props = {
		contentMin: '60%',
		noStretch: false,
		side: 'left',
		sideWidth: '400px',
		space: '1rem'
	}
</script>

<PageContainer>
	<Controller name='The Sidebar' {props} />

	<Layout.Sidebar {...$controlledProps}>
		<div class='bg-black text-white p-16'>
			<Layout.Stack>
				<Layout.Box padding='10px'>Item One</Layout.Box>
				<Layout.Box padding='10px'>Item Two</Layout.Box>
				<Layout.Box padding='10px'>Item Three</Layout.Box>
				<Layout.Box padding='10px'>Item Four</Layout.Box>
				<Layout.Box padding='10px'>Item Five</Layout.Box>
			</Layout.Stack>
		</div>
		<div class='bg-black text-white'>
			<Layout.Center class='h-full' andText>
				<Layout.Cover>
					<p class='font-bold text-xl'>The Main Headline</p>
				</Layout.Cover>
			</Layout.Center>
		</div>
	</Layout.Sidebar>
</PageContainer>

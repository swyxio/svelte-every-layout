<script>
	import PageContainer from '../components/page-container.svelte'
	import * as Layout from '../layout/index.ts'
	import Controller, {controlledProps} from '../components/controller.svelte'

	const props = {
		height: 'auto',
		itemWidth: 'auto',
		noBar: false,
		snap: true,
		snapAlign: 'start',
		space: 'var(--s0)'
	}
</script>

<PageContainer>
	<Controller name='The Reel' {props} />

	<Layout.Reel {...$controlledProps}>
		<div class='bg-black text-white'>This is The Reel</div>
		<div class='bg-black text-white'>This is The Reel as is this</div>
		<div class='bg-black text-white'>This is The Reel ohh and this guy</div>
		<div class='bg-black text-white'>This is The Reel</div>
		<div class='bg-black text-white'>This is The Reel</div>
		<div class='bg-black text-white'>This is The Reel</div>
		<div class='bg-black text-white'>This is The Reel</div>
		<div class='bg-black text-white'>This is The Reel or is it?</div>
	</Layout.Reel>
</PageContainer>

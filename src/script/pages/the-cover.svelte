<script>
	import PageContainer from '../components/page-container.svelte'
	import * as Layout from '../layout/index.ts'
	import Controller, {controlledProps} from '../components/controller.svelte'

	const props = {
		centered: ':nth-child(2)',
		space: 'var(--s1)',
		minHeight: '50vh',
		noPad: false
	}
</script>

<PageContainer>
	<Controller name='The Cover' {props} />

	<Layout.Cover {...$controlledProps} class='bg-black'>
		<div class='bg-white'>This is The Cover</div>
		<div class='bg-white'>This is The Cover</div>
		<div class='bg-white'>This is The Cover</div>
	</Layout.Cover>
</PageContainer>

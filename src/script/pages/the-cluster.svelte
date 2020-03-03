<script>
	import PageContainer from '../components/page-container.svelte'
	import * as Layout from '../layout/index.ts'
	import Controller, {controlledProps} from '../components/controller.svelte'

	const props = {
		align: 'center',
		justify: 'center',
		space: 'var(--s1)'
	}
</script>

<PageContainer>
	<Controller name='The Cluster' {props} />

	<Layout.Cluster {...$controlledProps}>
		<div class='bg-black text-white'>This is The Cluster</div>
		<div class='bg-black text-white'>This is The Cluster but it's longer</div>
		<div class='bg-black text-white'>This is The Cluster but random length text</div>
		<div class='bg-black text-white'>This is The Cluster</div>
		<div class='bg-black text-white'>This is The Cluster or is it?</div>
		<div class='bg-black text-white'>This is The Cluster dun dun dunnnnnnn</div>
	</Layout.Cluster>
</PageContainer>

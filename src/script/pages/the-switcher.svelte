<script>
	import PageContainer from '../components/page-container.svelte'
	import * as Layout from '../layout/index.ts'
	import Controller, {controlledProps} from '../components/controller.svelte'

	const props = {
		limit: 0,
		space: 'var(--s1)',
		threshold: 'var(--measure)'
	}
</script>

<PageContainer>
	<Controller name='The Switcher' {props} />

	<Layout.Switcher {...$controlledProps}>
		<div class='bg-black text-white'>This is The Switcher</div>
		<div class='bg-black text-white'>This is The Switcher</div>
		<div class='bg-black text-white'>This is The Switcher</div>
		<div class='bg-black text-white'>This is The Switcher</div>
		<div class='bg-black text-white'>This is The Switcher</div>
	</Layout.Switcher>
</PageContainer>

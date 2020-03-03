<script>
	import PageContainer from '../components/page-container.svelte'
	import * as Layout from '../layout/index.ts'
	import Controller, {controlledProps} from '../components/controller.svelte'

	const props = {
		breakout: false,
		fixed: false,
		margin: '0px'
	}
</script>

<PageContainer>
	<Controller name='The Imposter' {props} />

	<Layout.Imposter {...$controlledProps}>
		<div slot='content' class='bg-black text-white'>This is some content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione accusantium corporis pariatur sint voluptas iure eligendi cum ab omnis, quod quam expedita perspiciatis, nam earum quo sequi esse, alias atque omnis, quod quam expedita perspiciatis, nam earum quo sequi esse, alias atque omnis, quod quam expedita perspiciatis, nam earum quo sequi esse, alias atque</div>
		<div slot='imposter'>
			<Layout.Box class='bg-black text-white' style='width: 80vw;'>
				This is The Imposter Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus minima ea itaque fuga ut possimus libero. Illo eos impedit cum ipsa ex odio expedita! Ducimus reiciendis labore ullam delectus beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus minima ea itaque fuga ut possimus libero. Illo eos impedit cum ipsa ex odio expedita! Ducimus reiciendis labore ullam delectus beatae.
			</Layout.Box>
		</div>
	</Layout.Imposter>
</PageContainer>

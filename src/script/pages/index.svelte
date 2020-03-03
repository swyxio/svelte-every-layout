<script>
	import {link} from 'svelte-spa-router'
	import * as Layout from '../layout/index.ts'
	import PageContainer from '../components/page-container.svelte'

	const components = [
		'the-box',
		'the-center',
		'the-cluster',
		'the-cover',
		'the-frame',
		'the-grid',
		'the-imposter',
		'the-reel',
		'the-sidebar',
		'the-stack',
		'the-switcher'
	]
</script>

<PageContainer>
	<Layout.Box border='0'>
		<nav>
			<ul>
				<Layout.Grid space='30px'>
					{#each components as component}
					<li>
						<a href='/{component}' use:link>
							<Layout.Box class='h-full border-black'>
								<Layout.Center andText class='h-full'>
									<Layout.Stack space='30px' splitAfter='1'>
										<img src={`https://absolutely.every-layout.dev/images/illustrations/layout-icon_${component.slice(4)}.svg`} alt={component} loading='lazy' />
										<span class='font-bold text-lg underline'>{
											component
												.split('-')
												.map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
												.join(' ')
										}</span>
									</Layout.Stack>
								</Layout.Center>
							</Layout.Box>
						</a>
					</li>
					{/each}
				</Layout.Grid>
			</ul>
		</nav>
	</Layout.Box>
</PageContainer>

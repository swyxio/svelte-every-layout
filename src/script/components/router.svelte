<script>
	import Router from 'svelte-spa-router'
	import index from '~/script/pages/index.svelte'
	import theBox from '~/script/pages/the-box.svelte'
	import theCenter from '~/script/pages/the-center.svelte'
	import theCluster from '~/script/pages/the-cluster.svelte'
	import theCover from '~/script/pages/the-cover.svelte'
	import theFrame from '~/script/pages/the-frame.svelte'
	import theGrid from '~/script/pages/the-grid.svelte'
	import theImposter from '~/script/pages/the-imposter.svelte'
	import theReel from '~/script/pages/the-reel.svelte'
	import theSidebar from '~/script/pages/the-sidebar.svelte'
	import theStack from '~/script/pages/the-stack.svelte'
	import theSwitcher from '~/script/pages/the-switcher.svelte'

	const routes = {
		'/': index,
		'/the-box': theBox,
		'/the-center': theCenter,
		'/the-cluster': theCluster,
		'/the-cover': theCover,
		'/the-frame': theFrame,
		'/the-grid': theGrid,
		'/the-imposter': theImposter,
		'/the-reel': theReel,
		'/the-sidebar': theSidebar,
		'/the-stack': theStack,
		'/the-switcher': theSwitcher
	}
</script>

<Router {routes} />

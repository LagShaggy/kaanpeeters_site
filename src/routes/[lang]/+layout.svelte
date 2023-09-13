<script lang="ts">
	import { basePageStore } from '$lib/components/UI/BasePage/basePageStore';
	import comingSoonIcon from '$assets/comingSoon.png';

	import Heading from '$lib/components/UI/Elements/Heading.svelte';
	import Text from '$lib/components/UI/Elements/Text.svelte';

	import NavBar from '$lib/components/UI/Navigation/NavBar.svelte';
	import Tab from '$lib/components/UI/Navigation/Tab.svelte';
	import PageShell from '$lib/components/UI/BasePage/PageShell.svelte';
	import Footer from '$lib/components/UI/BasePage/Footer.svelte';
</script>

<title>{$basePageStore.title}</title>
<PageShell>
	<NavBar slot="navbar">
		<Tab props={{ name: 'Home', route: '/' }} />
		<Tab props={{ name: 'Quartet', route: '/quartet' }} />
		<Tab props={{ name: 'Impros', route: '/impros' }} />
		<Tab props={{ name: 'Writings', route: '/writings' }} />
		<Tab props={{ name: 'Gallery', route: '/gallery' }} disable>
			<img
				class="h-8 sm:h-10 w-auto rotate-12"
				slot="sticker"
				src={comingSoonIcon}
				alt="comming soon"
			/>
		</Tab>
		<Tab props={{ name: 'Shop', route: '/shop' }} disable>
			<img
				class="h-8 sm:h-10 w-auto rotate-12"
				slot="sticker"
				src={comingSoonIcon}
				alt="comming soon"
			/>
		</Tab>
	</NavBar>
	<div class="flex flex-wrap">
		<Heading>{$basePageStore.subtitle}</Heading>
		<div class="m-5">
			<slot />
		</div>
	</div>
	<Footer slot="footer" />
</PageShell>

<script lang="ts">
	import { basePageStore } from '$lib/components/UI/BasePage/basePageStore';
	import comingSoonIcon from '$assets/comingSoon.png';

	import Heading from '$lib/components/UI/Elements/Heading.svelte';
	import Text from '$lib/components/UI/Elements/Text.svelte';

	import NavBar from '$lib/components/UI/Navigation/NavBar.svelte';
	import Tab from '$lib/components/UI/Navigation/Tab.svelte';
</script>

<title>{$basePageStore.title}</title>

<div class="min-h-screen bg-gradient-to-b from-black to-gray-900 w-screen">
	<div class="w-screen">
		<NavBar>
			<Tab props={{ name: 'Home', route: '/' }} />
			<Tab props={{ name: 'Quartet', route: '/quartet' }} />
			<Tab props={{ name: 'Impros', route: '/impros' }} />
			<Tab props={{ name: 'Writings', route: '/writings' }} />
			<Tab props={{ name: 'Gallery', route: '/gallery' }} />
			<Tab props={{ name: 'Shop', route: '/shop' }} disable>
				<img class="h-10 w-auto rotate-12" slot="sticker" src={comingSoonIcon} alt="comming soon" />
			</Tab>
		</NavBar>
	</div>
	<div class="flex flex-wrap">
		<Heading>{$basePageStore.subtitle}</Heading>
		<div class="w-screen m-5">
			<slot />
		</div>
		<div class="">
			<Text>some footer text</Text>
		</div>
	</div>
</div>

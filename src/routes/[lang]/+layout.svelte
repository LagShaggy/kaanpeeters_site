<script lang="ts">
	import { basePageStore } from '$lib/components/UI/BasePage/basePageStore';
	import Heading from '$lib/components/UI/Elements/Heading.svelte';
	import Text from '$lib/components/UI/Elements/Text.svelte';
	import NavBar from '$lib/components/UI/Navigation/NavBar.svelte';
</script>

<title>{$basePageStore.title}</title>

<div class="min-h-screen bg-gradient-to-b from-black to-gray-900">
	<div class="w-screen">
		<NavBar />
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

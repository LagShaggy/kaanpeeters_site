<script lang="ts">
	import BasePage, { type BasePageProps } from '$lib/components/UI/BasePage.svelte';
	import GalleryContainer from '$lib/components/UI/Gallery/GalleryContainer.svelte';
	import EventContainer from '$lib/components/UI/Event/EventContainer.svelte';
	import Biography from '$lib/components/UI/Biography.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const props: BasePageProps = {
		title: 'Home',
		subtitle: 'Home'
	};
</script>

<BasePage {props}>
	<div class="flex flex-col sm:flex-row flex-wrap">
		<div class="w-full sm:w-1/2">
			<Biography />
		</div>
		<div class="w-full sm:w-1/2">
			<EventContainer />
		</div>
		<div class="mt-5">
			<GalleryContainer />
		</div>
	</div>
</BasePage>

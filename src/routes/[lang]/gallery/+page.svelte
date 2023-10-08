<script lang="ts">
	import GalleryContainer from '$lib/components/UI/Gallery/GalleryContainer.svelte';

	import { basePageStore } from '$lib/components/UI/BasePage/basePageStore';
	import type { PageData } from './$types';

	basePageStore.update((n) => {
		return {
			...n,
			subtitle: 'Gallery'
		};
	});

	export let data: PageData;
	const imageLinks = data.imageLink ?? [];
	//console.log(imageLinks);
</script>

<GalleryContainer {imageLinks} />

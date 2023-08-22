<script lang="ts">
	import GalleryContainer from '$lib/components/UI/Gallery/GalleryContainer.svelte';

	import { basePageStore } from '$lib/components/UI/BasePage/basePageStore';

	basePageStore.update((n) => {
		return {
			...n,
			subtitle: 'Gallery'
		};
	});
</script>

<GalleryContainer />

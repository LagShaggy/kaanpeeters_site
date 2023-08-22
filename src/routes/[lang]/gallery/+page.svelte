<script lang="ts">
	import BasePage from '$lib/components/UI/BasePage.svelte';
	import GalleryContainer from '$lib/components/UI/Gallery/GalleryContainer.svelte';
	
	type BasePageProps = {
		title: string;
		subtitle: string;
	};
	const props: BasePageProps = {
		title: 'Gallery',
		subtitle: 'Gallery'
	};
</script>

<BasePage {props}>
	<GalleryContainer />
</BasePage>


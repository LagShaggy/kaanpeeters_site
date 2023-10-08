<script lang="ts">
	import GalleryItem from './GalleryItem.svelte';

	export let imageLinks;
	console.log(imageLinks);
</script>

<div class="flex flex-wrap overflow-auto gap-0.5">
	{#each imageLinks as imageLink}
		<GalleryItem {imageLink} />
	{/each}
</div>

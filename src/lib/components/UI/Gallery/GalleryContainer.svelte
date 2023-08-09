<script lang="ts">
	import GalleryItem from './GalleryItem.svelte';
</script>

<div class="grid grid-cols-3 gap-2">
	{#each Array(5) as _, index (index)}
		<GalleryItem />
	{/each}
</div>

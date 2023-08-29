<script lang="ts">
	import scrollBackground from '$assets/scroll_bg.jpg';
	import type { Poem } from '$lib/types';
	import PoemFont from '../Elements/PoemFont.svelte';
	export let poem: Poem;
	export let downloadPdf: () => {};
</script>

<div class="bg-cover text-black" style="background-image: url({scrollBackground});">
	<div class="mx-2 sm:m-10">
		<br /> <br />
		<PoemFont className="text-xl font-semibold">
			{@html poem.name}
		</PoemFont>
		<br /> <br />
		<PoemFont className="text-lg">
			{@html poem.text}
		</PoemFont>
		<br /> <br />
	</div>
	<!-- <button on:click={downloadPdf}> CLICK ME </button> -->
</div>

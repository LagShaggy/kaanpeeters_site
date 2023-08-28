<script lang="ts">
	import scrollBackgroud from '$assets/scroll_bg.jpg';
	import type { Poem } from '$lib/types';
	import PoemFont from '../Elements/PoemFont.svelte';
	export let poem: Poem;
	export let downloadPdf: () => {};
</script>

<div class="overflow-y-visible">
	<img src={scrollBackgroud} alt="Pergament Poem Background" />
	<span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-black">
		<PoemFont className="text-xl">
			{@html poem.name}
		</PoemFont>
		<br /> <br />
		<PoemFont className="text-lg">
			{@html poem.text}
		</PoemFont>
		<!-- <button on:click={downloadPdf}> CLICK ME </button> -->
	</span>
</div>

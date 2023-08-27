<script lang="ts">
	import scrollBackgroud from '$assets/scroll_bg.jpg';
	export let poem: string;
</script>

<div class="relative">
	<img src={scrollBackgroud} alt="Pergament Poem Background" />
	<span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-black">
		{poem}
	</span>
</div>

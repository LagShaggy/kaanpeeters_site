<script lang="ts">
	import expand from 'img/page_expand.png';

	export let eventName: string = 'Silksong release';
	export let eventDate: string = '7.8.2029.';
	export let eventText: string =
		'This is the day Silksong releases, or Staro this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.';

	export let isPriority: boolean = true;
</script>

<div class="relative flex flex-col bg-orange-200 rounded-xl">
	<div class="flex flex-row mx-2 mt-1 border-b border-gray-500 border-opacity-50">
		<div class="w-full font-bold">
			{eventName}
		</div>
		<div class="w-auto text-right font-semibold">
			{eventDate}
		</div>
	</div>
	{#if isPriority}
		<div class="w-auto mx-2 mb-1">
			{eventText}
		</div>
	{:else}
		<div
			class="max-h-24 overflow-hidden w-auto mx-2 mb-1 text-transparent bg-clip-text bg-gradient-to-b from-black to-transparent"
		>
			{eventText}
		</div>
	{/if}
	<div class="absolute bottom-0 right-2">
		<button class="h-5 w-5 hover:bg-neutral-400 rounded">
			<img src={expand} alt="Expand" class="h-full w-full" />
		</button>
	</div>
</div>

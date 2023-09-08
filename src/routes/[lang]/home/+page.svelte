<script lang="ts">
	import EventContainer from '$lib/components/UI/Event/EventContainer.svelte';
	import Biography from '$lib/components/UI/Templates/Biography.svelte';
	import { basePageStore } from '$lib/components/UI/BasePage/basePageStore';
	import type { PageData } from '../$types';

	basePageStore.update((n) => {
		return {
			...n,
			subtitle: 'Home'
		};
	});

	export let data: PageData;
	const events = data.events ?? [];

	//console.log($page.params.lang);
</script>

<div class="flex flex-col sm:flex-row flex-wrap">
	<div class="w-full sm:w-2/3">
		<Biography />
	</div>
	<div class="w-full sm:w-1/3">
		<EventContainer {events} />
	</div>
</div>

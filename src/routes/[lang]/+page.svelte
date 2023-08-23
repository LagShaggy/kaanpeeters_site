<script lang="ts">
	import EventContainer from '$lib/components/UI/Event/EventContainer.svelte';
	import Biography from '$lib/components/UI/Templates/Biography.svelte';
	import type { PageData } from './$types';
	import Toggle from '$lib/components/UI/Elements/Toggle.svelte';
	import { page } from '$app/stores';
	import { basePageStore } from '$lib/components/UI/BasePage/basePageStore';

	basePageStore.update((n) => {
		return {
			...n,
			subtitle: 'Home'
		};
	});

	//console.log($page.params.lang);
</script>

<div class="flex flex-col sm:flex-row flex-wrap">
	<div class="w-full sm:w-2/3">
		<Biography />
	</div>
	<div class="w-full sm:w-1/3">
		<EventContainer />
	</div>
</div>

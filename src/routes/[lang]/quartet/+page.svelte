<script lang="ts">
	import Quartet from '$lib/components/UI/Templates/Quartet.svelte';
	import { basePageStore } from '$lib/components/UI/BasePage/basePageStore';
	import { get } from 'svelte/store';

	basePageStore.update((n) => {
		return {
			...n,
			subtitle: 'Quartet'
		};
	});
</script>

<Quartet />

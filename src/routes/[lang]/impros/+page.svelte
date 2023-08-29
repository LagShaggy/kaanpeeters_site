<script lang="ts">
	import { basePageStore } from '$lib/components/UI/BasePage/basePageStore';
	import Impros from '$lib/components/UI/Templates/Impros.svelte';

	basePageStore.update((n) => {
		return {
			...n,
			subtitle: 'Impros'
		};
	});
</script>

<Impros />

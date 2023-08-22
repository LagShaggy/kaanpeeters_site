<script lang="ts">
	import { basePageStore } from '$lib/components/UI/BasePage/basePageStore';

	basePageStore.update((n) => {
		return {
			...n,
			subtitle: 'Shop'
		};
	});
</script>

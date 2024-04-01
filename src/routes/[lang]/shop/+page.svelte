<script lang="ts">
	import { t } from '$lib/components/Language/language';
	import { basePageStore } from '$lib/components/UI/BasePage/basePageStore';
	import Text from '$lib/components/UI/Elements/Text.svelte';

	basePageStore.update((n) => {
		return {
			...n,
			subtitle: 'Shop'
		};
	});
</script>

<Text>
	{$t['shop.intro']}
</Text>

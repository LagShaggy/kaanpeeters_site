<script lang="ts">
	import { basePageStore } from '$lib/components/UI/BasePage/basePageStore';
	import WritingContainer from '$lib/components/UI/Writings/WritingContainer.svelte';
	import type { PageData } from './$types';

	basePageStore.update((n) => {
		return {
			...n,
			subtitle: 'Writings'
		};
	});

	export let data: PageData;

	const writings = data.writings ?? [];
</script>

<WritingContainer {writings} downloadPdf={data.downloadPdf} />

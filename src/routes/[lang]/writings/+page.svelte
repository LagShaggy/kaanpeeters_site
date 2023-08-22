<script lang="ts">
	import BasePage from '$lib/components/UI/BasePage.svelte';
	import WritingContainer from '$lib/components/UI/Writings/WritingContainer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const writings = data.writings ?? [];
</script>

<WritingContainer {writings} />

<script lang="ts">
	import BasePage, { type BasePageProps } from '$lib/components/UI/BasePage.svelte';
	import EventContainer from '$lib/components/UI/Event/EventContainer.svelte';
	import Biography from '$lib/components/UI/Biography.svelte';
	import type { PageData } from './$types';
	import Toggle from '$lib/components/UI/Elements/Toggle.svelte';

	export let data: PageData;

	const props: BasePageProps = {
		title: 'Home',
		subtitle: 'Home'
	};
</script>

<BasePage {props}>
	<div class="flex flex-col sm:flex-row flex-wrap">
		<div class="w-full sm:w-1/2">
			<Biography />
		</div>
		<div class="w-full sm:w-1/2">
			<EventContainer />
		</div>
	</div>
</BasePage>

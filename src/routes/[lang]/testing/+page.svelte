<script lang="ts">
	import { language } from '$lib/components/Language/language.js';
	import BasePage from '$lib/components/UI/BasePage.svelte';
	import EventContainer from '$lib/components/UI/Event/EventContainer.svelte';
	import { writable } from 'svelte/store';

	type BasePageProps = {
		title: string;
		subtitle: string;
	};
	const props: BasePageProps = {
		title: 'Testing',
		subtitle: 'Testing database'
	};

	export let data;
</script>

<BasePage {props}>
	{#each data.events as event}
		{event.name} {event.date} {event.time} {event.description}<br />
	{/each}
	<EventContainer />
</BasePage>

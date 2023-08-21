<script lang="ts">
	import BasePage from '$lib/components/UI/BasePage.svelte';
    import EventContainer from '$lib/components/UI/EventComp/EventContainer.svelte';
	
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
      {event.name} {event.date} {event.time} {event.description}<br>
    {/each}
    <EventContainer />
</BasePage>


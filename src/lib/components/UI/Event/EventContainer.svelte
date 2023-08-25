<script lang="ts">
	import EventItem from './EventItem.svelte';
	import expandIco from '../../../assets/icons/page_expand.png';
	import colapseIco from '../../../assets/icons/page_collapse.png';

	import type { Event } from '$lib/types';

	export let events: Event[];

	let isModal: boolean = false;
	$: isModal;

	const toggleModal = () => {
		isModal = !isModal;
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if isModal}
	<div
		class="bg-opacity-25 backdrop-blur bg-gray-300 w-screen h-screen fixed top-0 left-0 right-0 z-50 overflow-scroll"
	>
		<div class="flex justify-center items-center">
			<div class="w-full sm:w-4/5 flex flex-col m-2 sm:m-5 gap-1">
				<div class="flex flex-row">
					<div class="bg-green-600 rounded-xl">
						<div class="text-left font-bold mx-2">This is a list of all events</div>
					</div>
					<div
						on:click={toggleModal}
						class="flex flex-row ml-auto text-right font-semibold bg-red-500 rounded-xl cursor-pointer hover:underline"
					>
						<div class="text-left font-bold mx-2">Close all events</div>
						<div class=" flex justify-center items-center">
							<img src={colapseIco} alt="" class="h-5 mr-2" />
						</div>
					</div>
				</div>
				{#each events.sort((a, b) => new Date(a.date) - new Date(b.date)) as event, index (event.id)}
					{#if new Date(event.date) > new Date()}
						<EventItem {event} priority />
					{:else}
						<EventItem {event} />
					{/if}
				{/each}
			</div>
		</div>
	</div>
{:else}
	<div class="flex flex-col overflow-auto gap-1">
		<div class="flex flex-row gap-2">
			<div class="bg-green-600 rounded-xl">
				<div class="text-left font-bold mx-2">Find me on these events:</div>
			</div>

			<div
				on:click={toggleModal}
				class="flex flex-row ml-auto text-right font-semibold bg-green-600 rounded-xl cursor-pointer hover:underline"
			>
				<div class="text-left font-bold mx-2">Show all events</div>
				<div class=" flex justify-center items-center">
					<img src={expandIco} alt="" class="h-5 mr-2" />
				</div>
			</div>
		</div>
		{#each events.sort((a, b) => new Date(a.date) - new Date(b.date)) as event, index (event.id)}
			{#if new Date(event.date) > new Date()}
				<EventItem {event} priority />
			{/if}
		{/each}
	</div>
{/if}

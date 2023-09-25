<script lang="ts">
	import type { Event } from '$lib/types';
	import Text from '../Elements/Text.svelte';

	export let event: Event;
	export let priority: boolean = false;

	function formatDateTime(dateStr: string, timeStr: string): string {
		const [year, month, day] = dateStr.split('-');
		const [hour, minute, second] = timeStr.split(':');

		const formattedDate = `${parseInt(day, 10)}.${parseInt(month, 10)}.${year}.`;
		const formattedTime = `${hour}:${minute}`;

		return `${formattedDate} ${formattedTime}`;
	}
	const datetime = formatDateTime(event.date, event.time);

	//console.log(datetime);
</script>

<div
	class="flex flex-col rounded-lg bg-opacity-70"
	class:bg-gray-400={priority}
	class:bg-red-500={!priority}
>
	<div class="flex flex-row mx-2 mt-1 border-b border-gray-500 border-opacity-50">
		<div class="text-left font-bold">
			<Text>
				<div class="text-black">
					{event.name}
				</div>
			</Text>
		</div>
		<div class="ml-auto text-right font-semibold">
			<Text>
				<div class="text-black">
					{datetime}
				</div>
			</Text>
		</div>
	</div>
	<div class="w-auto mx-2 mb-1">
		<Text>
			<div class="text-black">
				{event.description}
			</div>
		</Text>
	</div>
</div>

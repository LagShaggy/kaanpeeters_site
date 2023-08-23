<script lang="ts">
	import expand from 'img/page_expand.png';
	import type { Event } from '$lib/types';

	export let event: Event;

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

<div class="flex flex-col bg-orange-200 rounded-xl">
	<div class="flex flex-row mx-2 mt-1 border-b border-gray-500 border-opacity-50">
		<div class="text-left font-bold">
			{event.name}
		</div>
		<div class="ml-auto text-right font-semibold">
			{datetime}
		</div>
	</div>
	<div class="w-auto mx-2 mb-1">
		{event.description}
	</div>
</div>

<script lang="ts">
	import BasePage from '$lib/components/UI/BasePage.svelte';
	import type { PageData } from './$types';

	// grab the data from the backend
	export let data: PageData;
	let pricepP = data.incomePerProject;

	// basic setup
	const props = {
		title: 'Calculation',
		subtitle: 'Revenue'
	};

	let totalProjectsCompleted: number = 2;

	// calculations
	$: calculatedValue = pricepP * totalProjectsCompleted;
</script>

<BasePage {props}>
	<div class="flex justify-between">
		<div class="flex flex-col">
			<div>Price per Project</div>

			<div>Projects completd</div>
		</div>

		<div class="flex flex-col">
			<div>
				{pricepP}
			</div>

			<input bind:value={totalProjectsCompleted} />
		</div>
	</div>

	<div class="flex justify-center text-3xl">
		<div class="border p-2">
			{calculatedValue}
		</div>
	</div>
</BasePage>

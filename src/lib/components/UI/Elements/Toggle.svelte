<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let on: boolean = false;
	$: on;
	const toggle = () => {
		on = !on;
		dispatch('click');
	};

	const offContainer: string = 'bg-red-900';
	const offSlider: string = 'ml-5';
</script>

<button
	class="flex w-10 h-5 bg-gray-700 rounded-full transition-all {on ? '' : offContainer}"
	on:click={toggle}
>
	<span class="h-5 w-5 rounded-full bg-white transition-all {on ? '' : offSlider}" />
</button>

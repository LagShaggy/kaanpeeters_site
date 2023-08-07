<script lang="ts">
	import Tab from './Tab.svelte';

	const tabs = [
		{
			name: 'home',
			route: '/'
		},
		{
			name: 'calculation',
			route: '/calculation'
		}
	];
</script>

<div class="flex-col space-y-1">
	{#each tabs as props}
		<Tab {props} />
	{/each}
</div>

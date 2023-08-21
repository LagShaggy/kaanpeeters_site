<script lang="ts">
	import LanguageToggle from '$lib/components/Language/LanguageToggle.svelte';
	import Tab from './Tab.svelte';
	import logo from 'img/elemental_army.png';

	const tabs = [
		{
			name: 'Home',
			route: '/'
		},
		{
			name: 'Quartet',
			route: '/quartet'
		},
		{
			name: 'Impros',
			route: '/impros'
		},
		{
			name: 'Writings',
			route: '/writings'
		},
		{
			name: 'Gallery',
			route: '/gallery'
		},
		{
			name: 'Shop',
			route: '/shop'
		}
	];
</script>

<div class="w-screen w-max-screen h-auto flex flex-col sm:flex-row flex-grow gap-2 sm:gap-0">
	<img src={logo} alt="logo-pic" class="h-40 w-40 sm:h-20 sm:w-auto" />
	{#each tabs as props}
		<Tab {props} />
	{/each}
	<div class="flex items-center w-full bg-slate-500 justify-center">
		<div class="w-auto h-auto justify-center mx-2">
			<div class="flex">
				<LanguageToggle />
			</div>
		</div>
	</div>
</div>

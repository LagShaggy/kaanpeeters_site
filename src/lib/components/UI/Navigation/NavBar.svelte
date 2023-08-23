<script lang="ts">
	import LanguageToggle from '$lib/components/Language/LanguageToggle.svelte';
	import Text from '../Elements/Text.svelte';
	import Tab from './Tab.svelte';
	import logo from 'img/core/kaan_logo.png';

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

<div class="flex flex-col sm:flex-row w-screen">
	<div class="flex flex-row w-screen">
		<div class="justify-center">
			<img src={logo} alt="logo-pic" class="h-60 w-auto sm:h-20" />
		</div>
		<div class="flex flex-col sm:flex-row flex-grow gap-2 sm:gap-0">
			{#each tabs as props}
				<Tab {props} />
			{/each}
		</div>
	</div>
	<div class="flex w-auto h-auto justify-center items-center">
		<LanguageToggle />
	</div>
</div>

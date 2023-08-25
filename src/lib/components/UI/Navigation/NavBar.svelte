<script lang="ts">
	import LanguageToggle from '$lib/components/Language/LanguageToggle.svelte';
	import { language } from '$lib/components/Language/language';
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
	<div class="flex flex-row w-screen mt-2 sm:m-0">
		<div class="justify-center m-2">
			<a href={$language}>
				<img src={logo} alt="logo-pic" class="h-60 w-auto sm:h-20" />
			</a>
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

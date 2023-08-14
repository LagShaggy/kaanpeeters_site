<script lang="ts">
	import LanguageToggle from '../Language/LanguageToggle.svelte';
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
			name: 'Shop',
			route: '/shop'
		},
		{
			name: 'Contacts',
			route: '/contact'
		}
	];

	enum Language {
		English,
		German
	}

	let currentLang: Language = Language.German;
</script>

<div class="w-screen w-max-screen h-auto flex flex-col sm:flex-row flex-grow gap-2 sm:gap-0">
	<img src={logo} alt="logo-pic" class="h-40 w-40 sm:h-20 sm:w-auto" />
	{#each tabs as props}
		<Tab {props} />
	{/each}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="flex items-center w-full bg-slate-500 justify-center">
		<div class="w-auto h-auto justify-center">
			<div class="flex">
				<LanguageToggle />
				<!-- svelte-ignore a11y-click-events-have-key-events
				<div class="mr-2 cursor-pointer hover:bg-slate-300" on:click={() => (Language.German)}>
					English
				</div>
				<label class="relative inline-flex cursor-pointer">
					<input type="checkbox" bind:checked={currentLang} class="relative sr-only peer" />
					<div
						class="w-11 h-6 rounded-full peer
						bg-red-500
						peer-checked:after:translate-x-full
						after:content-['']
						after:absolute
						after:top-[2px]
						after:left-[2px]
						after:bg-white
						after:border-black
						after:border
						after:rounded-full
						after:h-5
						after:w-5
						after:transition-all
						peer-checked:bg-blue-600"
					/>
				</label>
				svelte-ignore a11y-click-events-have-key-events
				<div class="ml-2 cursor-pointer hover:bg-slate-300" on:click={() => (currentLang = true)}>
					German
				</div> -->
			</div>
		</div>
	</div>
</div>

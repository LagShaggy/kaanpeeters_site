<script lang="ts">
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

	export let currentLang: boolean = true; //true = german, false = english

</script>


<div class="w-screen w-max-screen h-auto flex flex-col sm:flex-row flex-grow gap-2 sm:gap-0  bg-gradient-to-t from-black to-gray-800">
	<img src={logo} alt="logo-pic" class="h-40 w-40 sm:h-20 sm:w-auto rounded-br-xl">
	{#each tabs as props}
		<Tab {props} />
	{/each}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="flex items-center w-full justify-center">
		<div class="w-auto h-auto justify-center mx-2">
			<div class="flex">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="mr-2 cursor-pointer hover:bg-slate-300 hover:rounded" on:click={() => currentLang = false}>English</div>
				<label class="relative inline-flex cursor-pointer">
					<input 
						type="checkbox" 
						bind:checked={currentLang}
						class="relative sr-only peer">
					<div class="w-11 h-6 rounded-full peer 
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
						peer-checked:bg-blue-600">
					</div>
				</label>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="ml-2 cursor-pointer hover:bg-slate-300 hover:rounded" on:click={() => currentLang = true}>German</div>
			</div>
		</div>
	</div>
</div>

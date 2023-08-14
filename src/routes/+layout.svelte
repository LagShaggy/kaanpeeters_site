<script lang="ts">
	import './app.css';
	import { page } from '$app/stores';
	import { redirect } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { language } from '$lib/components/UI/Language/languageStore';

	language;

	let langRoute: string;
	page.subscribe((value) => {
		langRoute = value.params.lang;
		if (!langRoute) {
			langRoute = 'de';
		}
	});
	onMount(() => {
		goto(`/${langRoute}/`);
	});
</script>

<div class="bg-slate-400 w-full">
	<slot />
</div>

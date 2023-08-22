<script context="module" lang="ts">
	export type BasePageProps = {
		title: string;
		subtitle: string;
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';

	import NavBar from './Navigation/NavBar.svelte';

	export let props: BasePageProps;
</script>

<title>{props.title}</title>

<div class="min-h-screen">
	<div class="w-screen">
		<NavBar />
	</div>
	<div class="flex flex-wrap">
		<h1 class="w-screen text-4xl font-extrabold text-left mt-5 mx-5">{props.subtitle}</h1>
		<div class="w-screen m-5">
			<slot />
		</div>
		<div class="">some footer text</div>
	</div>
</div>

<script lang="ts">
	import { language } from '$lib/components/Language/language';
	import { page } from '$app/stores';
	import Rainbow from '../Styling/rainbow.svelte';

	type PageProps = {
		name: string;
		route: string;
	};

	export let props: PageProps;
	export let disable: boolean = false;

	let current: boolean = false;
	$: {
		const myRoute = props.route.split('/').slice(1).join('/');
		const currentRoute = $page.url.pathname.split('/').slice(2).join('/');

		current = myRoute == currentRoute;
	}
</script>

<a
	href={`${$language}${props.route}`}
	class="flex items-center w-full hover:bg-gray-800 transition-all relative p-1"
	class:pointer-events-none={disable}
	class:bg-gray-900={current}
>
	<div class="flex-grow">
		<div class="w-auto h-full text-center font-extrabold">
			<Rainbow>
				<p class="font-navBar text-3xl">
					{props.name}
				</p>
			</Rainbow>
		</div>
		<div class="absolute right-10 sm:right-24 md:right-0 top-0 md:top-2">
			<slot class="" name="sticker" />
		</div>
	</div>
</a>

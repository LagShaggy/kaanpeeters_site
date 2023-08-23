<script lang="ts">
	import { language } from '$lib/components/Language/language';
	import { page } from '$app/stores';
	import Rainbow from '../Styling/rainbow.svelte';

	type PageProps = {
		name: string;
		route: string;
	};

	export let props: PageProps;

	let current: boolean = false;
	$: {
		let location: string = `${props.route}`;
		let tabname: string = $page.url.pathname;
		const resultloc = location.split('/').slice(1).join('/');
		const resultname = tabname.split('/').slice(2).join('/');

		if (resultloc == resultname) {
			console.log(resultloc);
			current = true;
		} else {
			current = false;
		}
	}
</script>

<a
	href={`${$language}${props.route}`}
	class="flex items-center w-full hover:bg-gray-900"
	class:bg-blue-700={current}
>
	<div class="flex-grow">
		<div class="w-auto h-full text-center font-extrabold">
			<Rainbow>
				<p class="font-navBar text-3xl">
					{props.name}
				</p>
			</Rainbow>
		</div>
	</div>
</a>

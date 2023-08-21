<script lang="ts">
	import { language } from '$lib/components/Language/language';
	import Rainbow from '../rainbow.svelte';

	type PageProps = {
		name: string;
		route: string;
	};

	export let props: PageProps;
</script>

<a
	href={`${$language}${props.route}`}
	class="flex items-center w-full bg-slate-500 hover:bg-slate-300"
>
	<div class="flex-grow">
		<div class="w-auto h-full text-center font-extrabold">
			<Rainbow>
				{props.name}
			</Rainbow>
		</div>
	</div>
</a>

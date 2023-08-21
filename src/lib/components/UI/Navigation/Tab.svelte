<script lang="ts">
	import Rainbow from '../rainbow.svelte';
	
	type PageProps = {
		name: string;
		route: string;
	};

	export let props: PageProps;
</script>

<a href={props.route} class="flex items-center w-full hover:bg-slate-300 hover:rounded-b-xl">
	<div class="flex-grow">
		<div class="w-auto h-full text-center font-extrabold">
			<Rainbow>
				{props.name}
			</Rainbow>
		</div>
	</div>
</a>

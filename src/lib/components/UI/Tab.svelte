<script lang="ts">
	type PageProps = {
		name: string;
		route: string;
	};

	export let props: PageProps;
</script>

<a href={props.route} class="flex items-center w-full bg-slate-500 hover:bg-slate-300">
	<div class="flex-grow">
		<div class="w-auto h-full text-center">
			{props.name}
		</div>
	</div>
</a>

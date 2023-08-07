<script lang="ts">
	type PageProps = {
		name: string;
		route: string;
	};

	export let props: PageProps;
</script>

<div class="mb-1">
	<a href={props.route}>
		<div class="bg-slate-500 border border-black">
			{props.name}
		</div>
	</a>
</div>

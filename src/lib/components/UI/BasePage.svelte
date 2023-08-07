<script lang="ts">
	type BasePageProps = {
		title: string;
		subtitle: string;
	};

	export let props: BasePageProps;
</script>

<title>{props.title}</title>

<h1 class="text-4xl font-extrabold mb-5 text-center">{props.subtitle}</h1>

<div class="flex justify-center">
	<div class="w-4/5">
		<slot />
	</div>
</div>

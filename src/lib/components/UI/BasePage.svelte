<script lang="ts">
	type BasePageProps = {
		title: string;
		subtitle: string;
	};

	export let props: BasePageProps;
</script>

<title>{props.title}</title> 

<div class="flex flex-wrap justify-center">
	<h1 class="w-screen text-4xl font-extrabold text-left mt-5 ml-5">{props.subtitle}</h1>
	<div class="w-screen m-5">
		<slot />
	</div>
</div>

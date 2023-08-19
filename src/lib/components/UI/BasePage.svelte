<script lang="ts">
	import NavBar from "./Navigation/NavBar.svelte";
	
	
	type BasePageProps = {
		title: string;
		subtitle: string;
	};

	export let props: BasePageProps;

</script>

<title>{props.title}</title> 

<div class="w-screen">
	<NavBar />
</div>
<div class="flex flex-wrap justify-center flex-grow">
	<h1 class="w-screen text-4xl font-extrabold text-left mt-5 ml-5">{props.subtitle}</h1>
	<div class="w-screen m-5">
		<slot />
	</div>
</div>

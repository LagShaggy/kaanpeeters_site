<script lang="ts">
	import BasePage from '$lib/components/UI/BasePage.svelte';
	
	type BasePageProps = {
		title: string;
		subtitle: string;
	};
	const props: BasePageProps = {
		title: 'Writings',
		subtitle: 'Writings'
	};
</script>

<BasePage {props}/>


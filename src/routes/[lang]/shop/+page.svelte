<script lang="ts">
	import BasePage from '$lib/components/UI/BasePage.svelte';
	
	type BasePageProps = {
		title: string;
		subtitle: string;
	};
	const props: BasePageProps = {
		title: 'Shop',
		subtitle: 'Shop'
	};
</script>

<BasePage {props}/>


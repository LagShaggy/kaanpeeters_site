<script lang="ts">
	import BasePage from '$lib/components/UI/BasePage.svelte';

	type BasePageProps = {
		title: string;
		subtitle: string;
	};
	const props: BasePageProps = {
		title: 'Quartet',
		subtitle: 'Quartet'
	};

</script>

<BasePage {props}/>





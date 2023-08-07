<script lang="ts">
	import BasePage from '$lib/components/UI/BasePage.svelte';
	type BasePageProps = {
		title: string;
		subtitle: string;
	};
	const props: BasePageProps = {
		title: 'Home',
		subtitle: 'Title of this Page'
	};
</script>

<BasePage {props}>
	Here the Text will go to fill the page, but I have created a component that I can reuse on every
	page
</BasePage>

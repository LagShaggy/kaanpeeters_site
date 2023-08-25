<script>
	import Heading from '../Elements/Heading.svelte';
	import Subheading from '../Elements/Subheading.svelte';
	import Text from '../Elements/Text.svelte';
	import FooterColumn from './FooterElements/FooterColumn.svelte';
	import LargeFooterContainer from './FooterElements/LargeFooterContainer.svelte';
</script>

<div>
	<div class="flex flex-row justify-around items-start mb-10">
		<LargeFooterContainer>
			<Heading>kaanpeeters.ch</Heading>
			<img slot="icon" src="/favicon.png" alt="craying ghost" class="h-20 w-auto mt-4" />
		</LargeFooterContainer>
		<FooterColumn>
			<Subheading>Kaan Peeters</Subheading>
			<Text>Moments</Text>
			<Text>Music</Text>
			<Text>Text</Text>
		</FooterColumn>
		<FooterColumn>
			<Subheading>Impressum</Subheading>
			<Text>Made by Svord</Text>
		</FooterColumn>
	</div>
</div>

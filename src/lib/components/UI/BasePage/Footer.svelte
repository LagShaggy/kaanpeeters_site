<script>
	import Heading from '../Elements/Heading.svelte';
	import Subheading from '../Elements/Subheading.svelte';
	import Text from '../Elements/Text.svelte';
	import FooterColumn from './FooterElements/FooterColumn.svelte';
	import LargeFooterContainer from './FooterElements/LargeFooterContainer.svelte';
</script>

<div>
	<div
		class="flex flex-col md:flex-row justify-center items-center md:justify-around md:items-start mb-10"
	>
		<LargeFooterContainer>
			<Heading>kaanpeeters.ch</Heading>
			<img slot="icon" src="/favicon.png" alt="craying ghost" class="w-20 aspect-auto mt-4 mx-5" />
		</LargeFooterContainer>
		<FooterColumn>
			<Subheading>Kaan Peeters</Subheading>
			<Text>Moments</Text>
			<Text>Music</Text>
			<Text>Text</Text>
		</FooterColumn>
		<FooterColumn>
			<Subheading>Social</Subheading>
			<a href="https://www.instagram.com/kaanpeeters/" target="_blank">
				<Text><div class="hover:underline">Instagram</div></Text>
			</a>
			<a href="https://www.youtube.com/@kaanpeeters/featured" target="_blank">
				<Text><div class="hover:underline">YouTube</div></Text>
			</a>
			<a href="https://bandcamp.com/kaanpeeters" target="_blank">
				<Text><div class="hover:underline">Bandcamp</div></Text>
			</a>
			<a href="mailto:kaan.peeters@gmail.com">
				<Text><div class="hover:underline">Email</div></Text>
			</a>
		</FooterColumn>
		<FooterColumn>
			<Subheading>Impressum</Subheading>
			<Text>Made by Svord</Text>
		</FooterColumn>
	</div>
</div>

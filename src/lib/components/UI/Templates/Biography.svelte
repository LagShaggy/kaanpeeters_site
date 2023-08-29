<script lang="ts">
	import bioPicture from '$assets/Kaan_Peeters.jpg';
	import instagramPic from '$assets/core/logo_instagram.png';
	import youtubePic from '$assets/core/logo_youtube.png';
	import bandcampPic from '$assets/core/logo_bandcamp.png';
	import Subheading from '../Elements/Subheading.svelte';
	import Text from '../Elements/Text.svelte';

	import { t } from '$lib/components/Language/language';
</script>

<div class="flex flex-col sm:flex-row">
	<div class="sm:w-1/3 mr-0 sm:mr-5">
		<img src={bioPicture} alt="Kaan bio" class="rounded-xl aspect-w-2 aspect-h-9" />
	</div>
	<div class="w-full">
		<Subheading>
			{$t['home.kaanpeeters']}<br />
			{$t['home.slogan']}<br /><br />
		</Subheading>
		<Text>
			{$t['home.text']}
		</Text>

		<div class="flex flex-row gap-2 m-2 justify-evenly">
			<a href="https://www.instagram.com/kaanpeeters/" target="_blank">
				<img src={instagramPic} alt="My Instagram page" class="h-20" />
			</a>
			<a href="https://www.youtube.com/@kaanpeeters/featured" target="_blank">
				<img src={youtubePic} alt="My You Tube page" class="h-20" />
			</a>
			<a href="https://bandcamp.com/kaanpeeters" target="_blank">
				<img src={bandcampPic} alt="My Bandcamp page" class="h-20" />
			</a>
		</div>
	</div>
</div>

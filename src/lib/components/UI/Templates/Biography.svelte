<script lang="ts">
	import bioPicture from 'img/Kaan_Peeters.jpg';
	import instagramPic from 'img/core/logo_instagram.png';
	import youtubePic from 'img/core/logo_youtube.png';
	import bandcampPic from 'img/core/logo_bandcamp.png';
	import Subheading from '../Elements/Subheading.svelte';
	import Text from '../Elements/Text.svelte';

	import { t } from '../../Language/language';
</script>

<div class="flex flex-row">
	<div class="w-full">
		<Subheading>
			{$t['home.kaanpeeters']}<br />
			{$t['home.slogan']}<br /><br />
		</Subheading>
		<Text>
			{$t['home.text']}
		</Text>

		<div class="flex flex-row flex-grow gap-2 my-2">
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
	<img src={bioPicture} alt="Kaan bio" class="h-min sm:h-auto w-1/3 mx-0 sm:mx-5 rounded-xl" />
</div>

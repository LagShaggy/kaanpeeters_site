<script lang="ts">
	import GalleryItem from '../Gallery/GalleryItem.svelte';
	import Text from '../Elements/Text.svelte';
	import Subheading from '../Elements/Subheading.svelte';
	import { t } from '../../Language/language';
	import PicSara from 'img/sara.jpg';
	import PicBenjamin from 'img/benjamin.jpg';
	import PicMartin from 'img/martin.jpg';
</script>

<div class="flex flex-col">
	<div class="flex flex-col sm:flex-row">
		<div class="m-5">
			<Text>
				{$t['quartet.main']}<br />
			</Text>
		</div>
		<div class="">
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe
				src="https://m.youtube.com/embed/wKDOOWwu1o4"
				class="w-auto h-auto sm:h-[315px] sm:w-[560px]"
				frameborder="0"
				allowfullscreen
			/>
		</div>
	</div>
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<div class="flex flex-col sm:flex-row m-2 gap-2">
		<div class="flex-grow">
			<div class="text-center">
				<Subheading>
					{$t['quartet.benjamin.name']}<br />
				</Subheading>
			</div>
			<img src={PicBenjamin} alt="Benjamin picture" class="w-auto" />
			<Text>
				{$t['quartet.benjamin.text']}<br />
			</Text>
		</div>
		<div class="flex-grow">
			<div class="text-center">
				<Subheading>
					{$t['quartet.sara.name']}<br />
				</Subheading>
			</div>
			<img src={PicSara} alt="Benjamin picture" class="w-auto" />
			<Text>
				{$t['quartet.sara.text']}<br />
			</Text>
		</div>
		<div class="flex-grow">
			<div class="text-center">
				<Subheading>
					{$t['quartet.martin.name']}<br />
				</Subheading>
			</div>
			<img src={PicMartin} alt="Benjamin picture" class="w-auto" />
			<Text>
				{$t['quartet.martin.text']}<br />
			</Text>
		</div>
	</div>
</div>

<script lang="ts">
	import Text from '../Elements/Text.svelte';
	import Subheading from '../Elements/Subheading.svelte';
	import { t } from '../../Language/language';
	import picSara from '$assets/sara.jpg';
	import picBenjamin from '$assets/benjamin.jpg';
	import picMartin from '$assets/martin_expanded.jpg';
</script>

<div class="flex flex-col">
	<div class="flex flex-col 2xl:flex-row mb-10">
		<div class="m-5">
			<Text>
				{$t['quartet.main']}<br />
			</Text>
		</div>
		<div class="2xl:w-full">
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe
				src="https://www.youtube.com/embed/wKDOOWwu1o4"
				class="w-full h-full aspect-video"
				frameborder="0"
				allowfullscreen
			/>
		</div>
	</div>
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<div class="flex flex-col sm:flex-row m-2 gap-2">
		<div class="w-full md:w-1/3 mb-10">
			<div class="text-center">
				<Subheading>
					{$t['quartet.benjamin.name']}<br />
				</Subheading>
			</div>
			<img src={picBenjamin} alt="Benjamin picture" class="w-auto" />
			<div class="mt-5 md:mx-3 mx-0">
				<Text>
					{$t['quartet.benjamin.text']}<br />
				</Text>
			</div>
		</div>
		<div class="w-full md:w-1/3 mb-10">
			<div class="text-center">
				<Subheading>
					{$t['quartet.sara.name']}<br />
				</Subheading>
			</div>
			<img src={picSara} alt="Benjamin picture" class="w-auto" />
			<div class="mt-5 md:mx-3 mx-0">
				<Text>
					{$t['quartet.sara.text']}<br />
				</Text>
			</div>
		</div>
		<div class="w-full md:w-1/3 mb-10">
			<div class="text-center">
				<Subheading>
					{$t['quartet.martin.name']}<br />
				</Subheading>
			</div>
			<img src={picMartin} alt="Benjamin picture" class="w-auto" />
			<div class="mt-5 md:mx-3 mx-0">
				<Text>
					{$t['quartet.martin.text']}<br />
				</Text>
			</div>
		</div>
	</div>
</div>

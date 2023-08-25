<script lang="ts">
	import Text from '../Elements/Text.svelte';
	import improsPic from '../../../assets/core/IMPROS_Logo.webp';
	import clickmePic from '../../../assets/core/clickme.png';
	import { t } from '../../Language/language';
</script>

<div class="flex flex-col sm:flex-row">
	<div class="relative flex justify-center items-center">
		<div class="w-1/2 mb-5 sm:m-0">
			<a href="https://impros.ch" target="_blank">
				<img
					src={improsPic}
					alt=""
					class="rounded-lg transform hover:scale-105 transition duration-330"
				/>
			</a>
		</div>
		<div class="absolute left-16 -bottom-6">
			<img src={clickmePic} alt="" class="w-1/3 pointer-events-none animate-tilt" />
		</div>
	</div>
	<div class="mt-10 sm:mt-0">
		<Text>
			{$t['impros.text']} <br />
		</Text>
	</div>
</div>

<style>
	@keyframes tilt {
		0% {
			transform: rotate(-10deg);
		}
		50% {
			transform: rotate(10deg);
		}
		100% {
			transform: rotate(-10deg);
		}
	}

	.animate-tilt {
		animation: tilt 3s infinite;
	}
</style>

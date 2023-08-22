<script lang="ts">
	import { returnRandColors } from './randcolor';

	const colors: string[] = returnRandColors(); //gives array of 7 colors in random order
</script>

<div
	class="anim-rainbowtext"
	style="background-image: linear-gradient(to left, white, {colors[0]}, white, {colors[1]});"
>
	<slot />
</div>

<style>
	.anim-rainbowtext {
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;

		background-size: 400%;
		background-position: 0%;

		animation: animatedText 6s linear infinite alternate-reverse;
	}

	@keyframes animatedText {
		to {
			background-position: 100%;
		}
	}
</style>

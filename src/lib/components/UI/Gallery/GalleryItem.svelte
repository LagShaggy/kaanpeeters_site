<script lang="ts">
	import mountain from 'img/mountains.jpeg';
	const text: string = 'This a a flavourful text for the image';

	export let imageUrl: string;
	export let altText: string;
	export let flavourText: string;

	// random colour logic
	const randCol = Math.floor(Math.random() * 6);
	const cols: string[] = [
		'border-red-300',
		'border-yellow-300',
		'border-lime-300',
		'border-cyan-300',
		'border-blue-300',
		'border-purple-300',
		'border-orange-300'
	];

	const shadowCols: string[] = [
		'shadow-red-300',
		'shadow-yellow-300',
		'shadow-lime-300',
		'shadow-cyan-300',
		'shadow-blue-300',
		'shadow-purple-300',
		'shadow-orange-300'
	];
	const colour = cols[randCol];
	const shadowCol = shadowCols[randCol];
	let isModal: boolean = false;

	$: isModal;

	const toggleModal = () => {
		isModal = !isModal;
	};
</script>

{#if isModal}
	<div
		on:click={toggleModal}
		class="fixed bg-opacity-25 bg-gray-300 w-screen h-screen top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
	>
		<div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
			<img src={mountain} />
		</div>
	</div>
{/if}

<div
	on:click={toggleModal}
	class="relative w-max h-max border-4 {colour} hover:{shadowCol} hover:shadow-2xl w-96 h-96"
>
	<img src={mountain} alt="" />
	<span class="absolute bottom-0 left-0 text-white">{text}</span>
</div>

<script lang="ts">
	import mountain from '$lib/assets/mountains.jpeg';
	const text: string = '';

	let imageUrl: string;
	let altText: string;
	let flavourText: string;

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
	const colour = cols[randCol];
	let isModal: boolean = false;

	$: isModal;

	const toggleModal = () => {
		isModal = !isModal;
	};
</script>

{#if isModal}
	<button
		on:click={toggleModal}
		class="fixed bg-opacity-25 backdrop-blur bg-gray-300 w-full h-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
	>
		<div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
			<div class="">
				<img src={mountain} class="w-full h-auto max-h-screen object-contain" alt="somepicture" />
			</div>
		</div>
	</button>
{/if}

<div
	on:click={toggleModal}
	class="relative border-2 {colour} w-1/5 flex-grow h-20 sm:w-40 sm:h-40 overflow-hidden rounded-xl transform hover:scale-110 hover:z-10 transition duration-330"
>
	<img src={mountain} alt="" class="w-full h-full object-cover" />
	<span class="absolute bottom-0 left-0 text-white">{text}</span>
</div>

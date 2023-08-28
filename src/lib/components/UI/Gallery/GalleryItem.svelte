<script lang="ts">
	import mountain from '$lib/assets/mountains.jpeg';
	import ModalWindow from '../Modal/ModalWindow.svelte';
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
</script>

<ModalWindow>
	<img slot="view" src={mountain} alt="" class="w-52 h-52" />
	<img slot="modal" src={mountain} class="w-full h-full object-cover" alt="somepicture" />
</ModalWindow>

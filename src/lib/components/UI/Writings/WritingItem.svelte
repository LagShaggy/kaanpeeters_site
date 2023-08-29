<script lang="ts">
	import type { Poem, Writing } from '$lib/types';
	import { flip } from 'svelte/animate';
	import Text from '../Elements/Text.svelte';
	import PoemView from './PoemView.svelte';
	import ModalWindow from '../Modal/ModalWindow.svelte';
	import PoemFont from '../Elements/PoemFont.svelte';

	export let poem: Poem;
	export let downloadPdf: () => {};

	// displaying logic
	let show: boolean = false;

	const toggleShow = () => {
		show = !show;
	};
</script>

<ModalWindow>
	<div
		slot="view"
		class="w-80 h-80 flex 2xl:w-[25rem] 2xl:h-[25rem] items-center
		justify-center border border-gray-950 rounded-3xl transition-all
		select-text"
	>
		<PoemFont className="text-white text-2xl">
			{poem.name}
		</PoemFont>
	</div>

	<PoemView slot="modal" {poem} {downloadPdf} />
</ModalWindow>

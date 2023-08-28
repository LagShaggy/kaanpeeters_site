<script lang="ts">
	import x_icon from '$assets/icons/x.svg';
	let isModal: boolean = false;

	$: isModal;

	const toggleModal = () => {
		isModal = !isModal;
	};
</script>

<button on:click={toggleModal}>
	<slot name="view" />
</button>

{#if isModal}
	<button
		on:click={toggleModal}
		class="fixed bg-opacity-25 backdrop-blur bg-gray-300 top-0 left-0 w-full h-full z-10"
	>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click|stopPropagation
			class="cursor-default fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
		>
			<button class="absolute right-2 top-2" on:click={toggleModal}>
				<img src={x_icon} alt="" />
			</button>
			<slot name="modal" />
		</div>
	</button>
{/if}

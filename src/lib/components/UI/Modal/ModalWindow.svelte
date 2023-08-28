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
		class="bg-opacity-25 backdrop-blur bg-gray-300 w-full h-full fixed top-0 left-0 right-0 z-50 overflow-scroll"
	>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click|stopPropagation class="flex justify-center items-center">
			<div class="relative w-full sm:w-3/5">
				<button class="absolute right-2 top-2 sm:top-12" on:click={toggleModal}>
					<img src={x_icon} alt="" />
				</button>
				<slot name="modal" />
			</div>
		</div>
	</button>
{/if}

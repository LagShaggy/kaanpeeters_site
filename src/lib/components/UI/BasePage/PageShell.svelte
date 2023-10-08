<script lang="ts">
	export let size = '';
</script>

<div class="flex flex-col min-h-screen w-full bg-black">
	<slot name="navbar" />

	{#if size == 'full'}
		<slot />
	{:else}
		<div class="lg:px-52">
			<slot />
		</div>
	{/if}

	<div class="mt-auto pt-5 bg-black">
		<slot name="footer" />
	</div>
</div>

<script>
	import { t } from '$lib/components/Language/language';
	import { fade } from 'svelte/transition';
</script>

<p class="font-text text-white font-bold text-lg grid">
	{#key $t}
		<div transition:fade={{ duration: 400 }} class="row-span-full col-span-full">
			<slot />
		</div>
	{/key}
</p>

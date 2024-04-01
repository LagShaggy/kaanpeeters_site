<script>
	import { t } from '$lib/components/Language/language';
	import { fade } from 'svelte/transition';

	export let className = '';
</script>

<p class="font-text text-white font-bold text-lg grid {className}">
	{#key $t}
		<div transition:fade={{ duration: 400 }} class="row-span-full col-span-full">
			<slot />
		</div>
	{/key}
</p>

<script lang="ts">
	import { t } from '$lib/components/Language/language';
	import { fade } from 'svelte/transition';

	export let className: string = '';
</script>

<p class="font-text text-white transition ease-in-out delay-150grid {className}">
	{#key $t}
		<div transition:fade={{ duration: 500 }} class="col-span-full row-span-full">
			<slot />
		</div>
	{/key}
</p>

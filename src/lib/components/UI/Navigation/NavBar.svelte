<script lang="ts">
	import LanguageToggle from '$lib/components/Language/LanguageToggle.svelte';
	import { language } from '$lib/components/Language/language';
</script>

<div class="flex flex-col md:flex-row w-full">
	<div class="flex flex-row w-full mt-2 md:m-0">
		<div class="justify-center m-2">
			<a href={$language}>
				<img src="/favicon.png" alt="logo-pic" class="h-60 aspect-auto md:h-20" />
			</a>
		</div>
		<div class="flex flex-col md:flex-row flex-grow gap-2 md:gap-0">
			<slot />
		</div>
	</div>
	<div class="flex justify-center items-center w-auto h-auto pr-5">
		<LanguageToggle />
	</div>
</div>

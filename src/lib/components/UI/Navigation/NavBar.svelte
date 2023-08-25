<script lang="ts">
	import LanguageToggle from '$lib/components/Language/LanguageToggle.svelte';
	import { language } from '$lib/components/Language/language';
</script>

<div class="flex flex-col sm:flex-row w-screen">
	<div class="flex flex-row w-screen mt-2 sm:m-0">
		<div class="justify-center m-2">
			<a href={$language}>
				<img src="/favicon.png" alt="logo-pic" class="h-60 w-auto sm:h-20" />
			</a>
		</div>
		<div class="flex flex-col sm:flex-row flex-grow gap-2 sm:gap-0">
			<slot />
		</div>
		<div class="flex justify-center items-center w-auto h-auto pr-5">
			<LanguageToggle />
		</div>
	</div>
</div>

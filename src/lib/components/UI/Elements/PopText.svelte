<script>
	export let isVisible = false;

	import { t } from '$lib/components/Language/language';
</script>

<div
	class="text-2xl transform transition-transform duration-[2000ms] ease-in-out"
	class:scale-0={!isVisible}
	class:scale-100={isVisible}
>
	{@html $t['home.slogan']}
</div>

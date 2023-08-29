<script>
	import Heading from '../../Elements/Heading.svelte';
</script>

<div class="flex flex-col md:flex-row md:w-1/3 items-center justify-around mx-10">
	<slot name="icon" />
	<slot />
</div>

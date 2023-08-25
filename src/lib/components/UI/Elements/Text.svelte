<script lang="ts">
	export let className: string = '';
</script>

<p class="font-text text-gray-500 {className}">
	<slot />
</p>

<script>
	import NavBar from '$lib/components/UI/NavBar.svelte';
	import './app.css';
</script>

<div class="bg-slate-400 flex flex-grow h-screen">
	<div class="w-full">
		<slot />
	</div>
</div>

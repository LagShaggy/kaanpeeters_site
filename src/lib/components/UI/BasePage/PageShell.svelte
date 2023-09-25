<script lang="ts">
	import notes from '$assets/music_notes.svg';
</script>

<div class="flex flex-col min-h-screen w-full bg-black">
	<slot name="navbar" />

	<div class="lg:px-52">
		<slot />
	</div>

	<div class="mt-auto pt-5 bg-black">
		<slot name="footer" />
	</div>
</div>

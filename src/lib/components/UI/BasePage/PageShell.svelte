<script lang="ts">
	import notes from '$assets/music_notes.svg';
</script>

<div class="flex flex-col min-h-screen w-full bg-gradient-to-b from-black to-gray-900">
	<slot name="navbar" />

	<div class="lg:px-52">
		<slot />
	</div>

	<div class="mt-auto flex justify-center">
		<img src={notes} alt="musical notes" class="h-32" />
	</div>
	<div class="pt-5 bg-gray-900">
		<slot name="footer" />
	</div>
</div>

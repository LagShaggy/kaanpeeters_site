<script lang="ts">
	import notes from '$assets/music_notes.svg';
</script>

<div class="flex flex-col min-h-screen w-full bg-black">
	<slot name="navbar" />

	<div class="lg:px-52">
		<slot />
	</div>
	<!--
	<div class=" flex justify-center">
		<img src={notes} alt="musical notes" class="h-32" />
	</div>
	-->
	<div class="mt-auto pt-5 bg-gray-900">
		<slot name="footer" />
	</div>
</div>

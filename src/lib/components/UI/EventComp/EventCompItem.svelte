<script lang="ts">
    import expand from 'img/expand.png';

    export let eventName: string = "Silksong release";
	export let eventDate: string = "7.8.2029.";
	export let eventText: string = "This is the day Silksong releases, or Star Citizen enters early beta. Also did you know that the mitochondria is the powerhouse of the cell?";

    let isModal: boolean = false;
    $: isModal;
	const toggleModal = () => {
		isModal = !isModal;
	};
</script>

<style>

</style>

{#if isModal}
    <div
        on:click={toggleModal}
        class="fixed bg-opacity-25 bg-gray-300 backdrop-blur w-screen h-screen z-10"
    >
        
    </div>
{/if}


<div class="relative">
    <div class="flex flex-col bg-orange-200 rounded-xl w-40 h-60">
        <div class="w-full mx-2 mt-1 border-b border-gray-500 border-opacity-50 font-bold">
            {eventName}
        </div>
        <div class="w-full mx-2 border-b border-gray-500 border-opacity-50 font-semibold">
            {eventDate}
        </div>
        <div class="w-full mx-2 mb-1 overflow-hidden">
            {eventText}
        </div>
        <div class="absolute bottom-0 right-2">
            <button class="h-5 w-5 bg-blue-500 rounded">
                <img src={expand} alt="Expand" class="h-full w-full">
            </button>
        </div>
    </div>
</div>
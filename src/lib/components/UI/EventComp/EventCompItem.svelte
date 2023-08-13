<script lang="ts">
    import expand from 'img/page_expand.png';

    export let eventName: string = "Silksong release";
	export let eventDate: string = "7.8.2029.";
	export let eventText: string = "This is the day Silksong releases, or Star Citizen enters early beta. Also did you know that the mitochondria is the powerhouse of the cell? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.";

    export let isPriority: boolean = true;
</script>

<div class="relative flex flex-col bg-orange-200 rounded-xl">
    <div class="flex flex-row mx-2 mt-1 border-b border-gray-500 border-opacity-50">
        <div class="w-full font-bold">
            {eventName}
        </div>
        <div class="w-auto text-right font-semibold">
            {eventDate}
        </div>
    </div>
    {#if isPriority}
        <div class="w-auto mx-2 mb-1">
            {eventText}
        </div>
    {:else}
        <div class="max-h-24 overflow-hidden w-auto mx-2 mb-1 text-transparent bg-clip-text bg-gradient-to-b from-black to-transparent">
            {eventText}
        </div>
    {/if}
    <div class="absolute bottom-0 right-2">
        <button class="h-5 w-5 hover:bg-neutral-400 rounded">
            <img src={expand} alt="Expand" class="h-full w-full">
        </button>
    </div>
</div>



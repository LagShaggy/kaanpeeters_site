<script lang="ts">
	import { t } from '$lib/components/Language/language';
	import { basePageStore } from '$lib/components/UI/BasePage/basePageStore';
	import Subheading from '$lib/components/UI/Elements/Subheading.svelte';
	import Text from '$lib/components/UI/Elements/Text.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let { storeItems } = data;
	$: ({ storeItems } = data);
	$: storeItems = storeItems ?? [];

	basePageStore.update((n) => {
		return {
			...n,
			subtitle: 'Shop'
		};
	});
</script>

<Text>
	{$t['shop.intro']}
</Text>

<div class="px-10 lg:px-0 mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
	{#each storeItems as { name, description, redirect_url, image_url, newcomer }}
		<a href={redirect_url} target="_blank" class="relative box-content">
			{#if newcomer}
				<img src="/new.svg" alt="" class="absolute -top-5 -right-5 aspect-auto h-20" />
			{/if}
			<div class="w-full border border-transparent rounded-2xl overflow-hidden">
				{#if image_url}
					<img src={image_url} alt="" class="aspect-square" />
				{:else}
					<div class="aspect-square bg-slate-600" />
				{/if}
				<span class="px-1">
					<Subheading className="">
						{name}
					</Subheading>
					<Text className="text-opacity-80">{description}</Text>
				</span>
			</div>
		</a>
	{/each}
</div>

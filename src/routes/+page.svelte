<script lang="ts">
	import BasePage from '$lib/components/UI/BasePage.svelte';
	import GalleryContainer from '$lib/components/UI/Gallery/GalleryContainer.svelte';
	import GalleryItem from '$lib/components/UI/Gallery/GalleryItem.svelte';
	type BasePageProps = {
		title: string;
		subtitle: string;
	};
	const props: BasePageProps = {
		title: 'Initial Page',
		subtitle: 'Initial Page Subtitle'
	};
</script>

<BasePage {props}>
	<div class="flex flex-wrap">
		<div class="w-1/2 mb-5">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur delectus accusantium
			reiciendis voluptatibus ratione, eligendi assumenda amet dolore temporibus tempora mollitia
			voluptatem modi exercitationem nam veniam sint libero perferendis. Iusto cupiditate, corrupti
			harum odio, illum eos veritatis error magni distinctio facilis ipsa cum in suscipit dolores
			doloribus quasi magnam voluptatem iste id praesentium cumque laboriosam nam. Velit, quo est.
			Provident, quia itaque laboriosam odio, qui, neque corporis reiciendis ex voluptatum nesciunt
			explicabo inventore alias quod. Nemo hic quaerat at odio, ducimus nobis enim quibusdam iste
			doloremque molestiae esse rem! Nulla commodi soluta reprehenderit iste numquam dolores, id fugit
			reiciendis! Accusantium, qui fuga voluptatem illum commodi voluptas laborum, excepturi sapiente
			nemo mollitia unde cupiditate saepe! Ducimus recusandae illo libero est. Consequuntur sapiente
			suscipit assumenda quo dolorem molestiae cumque ullam aut quisquam, tempora dolor veniam inventore
			incidunt, ex repudiandae nulla veritatis nisi eius fuga necessitatibus reiciendis nostrum facere
			perferendis. Id, aliquid. Aspernatur culpa quo fuga facere quibusdam doloribus dolorem blanditiis
			corrupti repellendus! Necessitatibus error fuga molestiae alias a porro optio inventore expedita
			assumenda! Obcaecati fugit necessitatibus doloremque tenetur dolorum dolor quia.	
		</div>
		<div class="w-1/2 mb-5">
			events go here
		</div>
		<GalleryContainer />
	</div>
</BasePage>


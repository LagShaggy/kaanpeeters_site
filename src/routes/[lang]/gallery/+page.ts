import { supabase } from '$lib/supabase/supabaseClient';

function linker(name: string) {
	const { data: link, error } = supabase.storage.from('images').getPublicUrl('public/' + name);
	return link;
}

export const load = async () => {
	const { data, error } = await supabase.storage.from('images').list('public');
	//console.log(data);

	if (data) {
		const imageLink: string[] = data
			.map((obj) => obj.name)
			.map(linker)
			.map((obj) => obj.publicUrl);
		//console.log(imageLink);
		return {
			imageLink
		};
	} else {
		console.log('Error fetching images');
	}
};

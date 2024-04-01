import type { Database } from '$lib/supabase/supabase.types';
import { supabase } from '$lib/supabase/supabaseClient';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const { data: storeItems, error } = await supabase.from('store').select();

	if (error) {
		console.log(error);
	}
	return { storeItems: storeItems ?? [] };
};

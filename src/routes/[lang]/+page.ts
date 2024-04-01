import { supabase } from '$lib/supabase/supabaseClient';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const { data: events, error } = await supabase.from('events').select('*');

	return {
		events
	};
};

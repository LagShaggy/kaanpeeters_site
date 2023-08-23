import { supabase } from '$lib/supabase/supabaseClient';

export async function load() {
	const { data } = await supabase.from('events').select();
	return {
		events: data ?? []
	};
}

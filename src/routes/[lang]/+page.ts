import { supabase } from '$lib/supabase/supabaseClient';

export const load = async () => {
	const { data: events, error } = await supabase.from('events').select('*');

	console.log(events);
	return {
		events
	};
};

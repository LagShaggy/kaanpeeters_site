import { supabase } from '$lib/supabase/supabaseClient';

export const load = async () => {
	const { data: writings, error } = await supabase.from('writings').select('*');

	console.log(writings);
	return {
		writings
	};
};

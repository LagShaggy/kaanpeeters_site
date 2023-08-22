import { supabase } from '$lib/supabase/supabaseClient';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { data, error } = await supabase
		.from('writings')
		.select()
		.eq('id', params.writingId)
		.limit(1)
		.single();

	const downloadPdf = async () => {
		await supabase.storage.from('writings').download(data?.pdfid ?? '');
	};

	return {
		writing: data,
		downloadPdf: downloadPdf
	};
};

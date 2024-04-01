import { supabase } from '$lib/supabase/supabaseClient';

export const load = async () => {
	const { data: writings, error } = await supabase.from('writings').select('*');

	const downloadPdf = async (downloadId: string) => {
		const uri = encodeURIComponent(downloadId);
		const { data, error } = await supabase.storage
			.from('public/writings')
			.download(downloadId ?? '');
	};

	return {
		writings,
		downloadPdf
	};
};

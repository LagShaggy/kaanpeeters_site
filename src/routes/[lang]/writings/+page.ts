import { supabase } from '$lib/supabase/supabaseClient';

export const load = async () => {
	const { data: writings, error } = await supabase.from('writings').select('*');

	const downloadPdf = async (downloadId: string) => {
		const uri = encodeURIComponent(downloadId);
		console.log(uri);
		const { data, error } = await supabase.storage
			.from('public/writings')
			.download(downloadId ?? '');
		// const blob = data;
		// if (!error && !!blob) {
		// 	const buffer = Buffer.from(await blob.arrayBuffer());
		// 	// await fs.promises.writeFile(downloadId, buffer);
		// }
	};

	return {
		writings,
		downloadPdf
	};
};

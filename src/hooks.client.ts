import { redirect, type Handle } from '@sveltejs/kit';

// export const handle: Handle = async ({ event, resolve }) => {
// 	console.log(event.url.pathname);
// 	if (event.url.pathname == '/') {
// 		throw redirect(301, '/de');
// 	}
// 	const response = await resolve(event);
// 	return response;
// };

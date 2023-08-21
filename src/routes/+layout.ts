// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import './app.css';

export const prerender = false;
export const ssr = false;
export const csr = true;

import { writable } from "svelte/store";

export type BasePageProps = {
    title: string;
    subtitle: string;
};

export const basePageStore = writable<BasePageProps>({
    title: "Kaan Peeters",
    subtitle: "Home"
})
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    apiVersion: "2024-05-25",
    dataset: "production",
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: false
})

const builder = imageUrlBuilder(client);

export function urlFor(source: object) {
    return builder.image(source);
}

export async function getData(query: string, slug?: string) {
    const data = await client.fetch(query)
    return data;
}
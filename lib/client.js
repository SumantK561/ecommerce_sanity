import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";


export const client = SanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder  = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
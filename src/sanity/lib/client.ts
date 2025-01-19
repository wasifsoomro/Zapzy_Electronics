import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export async function getProducts() {
  const query = `*[_type == "product"] {
    id,
    name,
    image,
    imageslist,
    rating,
    price,
    category,
    colors,
    sizes,
    deliveryFee,
    discount
  }`;
  const products = await client.fetch(query);
  return products;
}


export async function getApiProducts() {
  const query = ` *[_type=="products"]{
  id,
  name,
  description,
  price,
  "image" : image.asset->url,
  imageslist,
  category,
  discount,
  "isNew": new,
  colors,
  sizes
}`;
  const products = await client.fetch(query);
  return products;
}

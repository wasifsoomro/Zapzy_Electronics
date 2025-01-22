import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


export async function getApiProducts() {
  try{
    const query = ` *[_type=="products"]{
      id,
      name,
      description,
      price,
      "image" : image.asset->url,
      imageslist,
      rating,
      categories,
      discount,
      "isNew": new,
      colors,
      sizes,
      
    }`;
    return await client.fetch(query);
  }catch(error){
    console.log("Error Fetching products:" , error)
    throw error
  }
}

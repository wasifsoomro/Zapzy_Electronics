import { NextResponse } from 'next/server';
import { getApiProducts } from '../../../sanity/lib/client'; // Import function to fetch products

export async function GET() {
  try {
    const productsDetail = await getApiProducts(); // Fetch the products from sanity client
    return NextResponse.json(productsDetail);
  } catch (error) {
    return NextResponse.error(); // Handle error if any
  }
}

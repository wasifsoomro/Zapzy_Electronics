// app/api/products/[id]/route.ts
import { getApiProducts } from "../../../../sanity/lib/client";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;  // Access the dynamic route parameter

  try {
    const products = await getApiProducts();
    const product = products.find((item: any) => item.id === id);

    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch product" }), { status: 500 });
  }
}

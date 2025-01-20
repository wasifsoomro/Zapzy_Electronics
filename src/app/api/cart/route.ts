import { NextResponse } from 'next/server';

let cart: any[] = []; // In-memory cart for simplicity. Use a database in production.

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(request: Request) {
  const item = await request.json();
  cart.push(item);
  return NextResponse.json({ message: 'Item added to cart', cart });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  cart = cart.filter((item) => item.id !== id);
  return NextResponse.json({ message: 'Item removed from cart', cart });
}

import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Get user input from request body
    const { fullName, userId,  email, streetAddress, city, postalCode, country } = body;


    // Create a new document in Sanity
    const newOrder = {
  _type: "order",
   fullName,
  email,
  streetAddress,
  city,
  postalCode,
  country
};

    const response = await client.create(newOrder);

    return NextResponse.json({ success: true, data: response }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error saving data" }, { status: 500 });
  }
}

export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "id",
      title: "Product ID",
      type: "string",
      validation: (Rule: any) =>
        Rule.required().error("Product ID is required"),
      description:
        "A unique identifier for the product (e.g., SKU or custom ID).",
    },
    {
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageslist",
      title: "Image List",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: any) => Rule.min(0).max(5),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "colors",
      title: "Available Colors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "sizes",
      title: "Available Sizes",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "deliveryFee",
      title: "Delivery Fee",
      type: "number",
    },
    {
      name: "discount",
      title: "Discount",
      type: "number",
      validation: (Rule: any) => Rule.min(0).max(1),
    },
  ],
};

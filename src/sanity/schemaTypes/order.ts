export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule: any) => Rule.required().min(3).max(50),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: "streetAddress",
      title: "Street Address",
      type: "string",
      validation: (Rule: any) => Rule.required().min(5),
    },
    {
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "postalCode",
      title: "Postal Code",
      type: "string",
      validation: (Rule: any) => Rule.required().regex(/^[0-9]{4,10}$/),
    },
    {
      name: "country",
      title: "Country",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

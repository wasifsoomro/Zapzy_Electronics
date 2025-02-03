import { defineType } from 'sanity';

const userSchema = defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      options: {
        list: [
          { title: 'User', value: 'user' },
          { title: 'Admin', value: 'admin' },
        ],
        layout: 'radio', // Displays roles as radio buttons
      },
      initialValue: 'user',
    },
  ],
});

export default userSchema;

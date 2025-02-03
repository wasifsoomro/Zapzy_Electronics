import { type SchemaTypeDefinition } from 'sanity'
import apiproducts from './products'
import userSchema from './user'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [apiproducts, order],
}


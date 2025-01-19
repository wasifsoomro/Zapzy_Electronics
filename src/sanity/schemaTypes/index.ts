import { type SchemaTypeDefinition } from 'sanity'
import apiproducts from './products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [apiproducts],
}

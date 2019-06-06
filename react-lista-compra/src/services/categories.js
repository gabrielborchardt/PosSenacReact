import client from '../providers/client'

export const getCategories = credentials =>
  client.get('categories', credentials)
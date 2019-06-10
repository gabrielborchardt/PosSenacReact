import client from '../providers/client'

export const getItems = () =>
  client.get('items')

export const postItem = (category_id, name) =>
  client.post('items', {name, category_id})

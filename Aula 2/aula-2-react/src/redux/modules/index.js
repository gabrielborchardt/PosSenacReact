import { combineReducers } from 'redux'
import categories from './category'
import items from './items'

export default combineReducers({
  categories,
  items
})

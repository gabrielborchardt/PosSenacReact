import { getCategories } from '../../services/category'

const initialState = {
  data: [],
  isLoading: true,
  hasError: false,
  selectedCategory: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_CATEGORIES':
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }
    case 'IS_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'SET_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload
      }
    default:
      return state
  }
}

const isLoading = flag => {
  return {
    type: 'IS_LOADING',
    payload: flag
  }
}

export const loadCategories = () => async dispatch => {
  dispatch(isLoading(true))
  const response = await getCategories()

  dispatch({
    type: 'SAVE_CATEGORIES',
    payload: response.data
  })
}

export const setCategory = (id) => {
  return {
    type: 'SET_CATEGORY',
    payload: id
  }
}

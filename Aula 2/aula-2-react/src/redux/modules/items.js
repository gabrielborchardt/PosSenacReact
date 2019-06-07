import { getItems, postItem } from '../../services/items'

export default (state = { data: [] } , action) => {
    switch (action.type) {
        case 'FILL_LIST':
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export const fillList = () => async dispatch => {
    const response = await getItems()
    dispatch({
        type: 'FILL_LIST',
        payload: response.data
    })
}

export const registerItem = (category, itemName) => {
    return async dispatch => {
        await postItem(category, itemName)
        const response = await getItems()
        dispatch({
            type: 'FILL_LIST',
            payload: response.data
        })
        return Promise.resolve()
    }
}


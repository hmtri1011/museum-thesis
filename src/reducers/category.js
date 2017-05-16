import { Map } from 'immutable'

const initialState = Map({
  ListItem: []
})

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CATEGORY_SUCCESS':
      return state.set('ListItem', state.get('ListItem').push(action.item))
    case 'GET_ALL_CATEGORY_SUCCESS':
      return state.set('ListItem', action.listItem)
    default:
      return state
  }
}

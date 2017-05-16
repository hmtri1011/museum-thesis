import { Map } from 'immutable'

const initialState = Map({
  ListItem: []
})

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM_SUCCESS':
      return state.set('ListItem', state.get('ListItem').push(action.item))

    case 'GET_ALL_ITEMS_SUCCESS':
      return state.set('ListItem', action.items)

    default:
      return state
  }
}

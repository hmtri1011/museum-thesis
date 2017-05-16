import { List, Map } from 'immutable'

const initialState = Map({
  ListItem: List([])
})

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CATEGORY_SUCCESS':
      return state.set('ListItem', state.get('ListItem').push(action.item))

    default:
      return state
  }
}

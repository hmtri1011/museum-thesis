import { combineReducers } from 'redux'
import postReducer from './post'
import itemReducer from './item'

export default combineReducers({
  posts: postReducer,
  items: itemReducer
})

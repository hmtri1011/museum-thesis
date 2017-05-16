import { combineReducers } from 'redux'
import postReducer from './post'
import itemReducer from './item'
import categoryReducer from './category'

export default combineReducers({
  posts: postReducer,
  items: itemReducer,
  categories: categoryReducer
})

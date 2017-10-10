import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
import rootReducer from './reducers'

const logger = createLogger({
  collapsed: true
})

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware, logger))
  )
}

import { Store, createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger = require('redux-logger')
import rootReducer, { IState } from './reducers'

export default function configureStore(initialState?: IState): Store<IState> {
  const loggerMiddleware = createLogger()

  const middlewares = [
    thunkMiddleware,
    loggerMiddleware
  ]

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  )
}

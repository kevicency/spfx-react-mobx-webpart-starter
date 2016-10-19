import { Store, createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer, { IState } from './reducers'

export default function configureStore(initialState: IState): Store<IState> {
  const middlewares = [
    thunkMiddleware
  ]

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  )
}

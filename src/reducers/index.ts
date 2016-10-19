import { combineReducers, Reducer } from 'redux'

import webpartReducer, { IWebpartState } from './webpart'

export interface IState {
  webpart: IWebpartState
 }

const rootReducer: Reducer<IState> = combineReducers<IState>({
  webpart: webpartReducer
})

export default rootReducer

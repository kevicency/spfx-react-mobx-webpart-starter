import IHelloWorldWebPartProps from '../webpart/IHelloWorldWebPartProps'
import { assign } from 'lodash'

export interface IWebpartState {
  properties: IHelloWorldWebPartProps
}

export const UPDATE_PROPERTY = 'webpart/UPDATE_PROPERTY'
export interface IUpdatePropertyAction {
  type: 'webpart/UPDATE_PROPERTY' // TODO is there a better way?
  propertyName: string,
  value: any
}
export type IWebpartAction = IUpdatePropertyAction

export const initialState: IWebpartState = {
  properties: { name: '' }
}

export default (state = initialState, action: IWebpartAction) => {
  switch (action.type) {
    case UPDATE_PROPERTY:
      return assign({}, state, {
        properties: assign({}, state.properties, {
          [action.propertyName]: action.value
        })
      })
    default:
     return state
  }
}

export function updateProperty(propertyName: string, value: any) {
  return { type: UPDATE_PROPERTY, propertyName, value }
}

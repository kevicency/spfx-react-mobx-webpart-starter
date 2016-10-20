import IHelloWorldWebPartProps from '../webpart/IHelloWorldWebPartProps'
import { assign } from 'lodash'

export interface IWebpartState {
  properties: IHelloWorldWebPartProps
}

export const UPDATE_PROPERTY = 'webpart/UPDATE_PROPERTY'
export const INIT_PROPERTIES = 'webpart/INIT_PROPERTIES'

export interface IUpdatePropertyAction {
  type: 'webpart/UPDATE_PROPERTY' // TODO is there a way to use the const?
  propertyName: string,
  value: any
}
export interface IInitPropertiesAction {
  type: 'webpart/INIT_PROPERTIES' // TODO is there a way to use the const?
  properties: IHelloWorldWebPartProps
}
export type IWebpartAction = IUpdatePropertyAction | IInitPropertiesAction

export const initialState: IWebpartState = {
  properties: { name: '' }
}

export default (state = initialState, action: IWebpartAction) => {
  switch (action.type) {
    case 'webpart/UPDATE_PROPERTY':
      return assign({}, state, {
        properties: assign({}, state.properties, {
          [action.propertyName]: action.value
        })
      })
    case 'webpart/INIT_PROPERTIES':
      return assign({}, state, {
        properties: action.properties
      })
    default:
     return state
  }
}

export function updateProperty(propertyName: string, value: any) {
  return { type: UPDATE_PROPERTY, propertyName, value }
}

export function initProperties(properties: IHelloWorldWebPartProps) {
  return { type: INIT_PROPERTIES, properties }
}


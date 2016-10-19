import * as React from 'react'
import * as ReactDom from 'react-dom'
import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base'
import { Store } from 'redux'
import { Provider } from 'react-redux'

import * as strings from 'helloWorldStrings'
import IHelloWorldWebPartProps from './IHelloWorldWebPartProps'
import { IState} from '../../reducers'
import { updateProperty } from '../../reducers/webpart'
import configureStore from '../../configureStore'
import HelloWorldContainer from '../../containers/HelloWorldContainer'

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  store: Store<IState>

  public constructor(context: IWebPartContext) {
    super(context)

    // create the store in the onInit callback to ensure that the properties are loaded
    this.onInit = () => {
      this.store = configureStore({
        webpart: {
          properties: this.properties
        }
      })

      return Promise.resolve(true)
    }

    this.onPropertyChanged = (propertyPath, oldValue, newValue) => {
      this.store.dispatch(updateProperty(propertyPath, newValue))
    }
  }

  public render(): void {
    const element = (
      <Provider store={this.store}>
        <HelloWorldContainer />
      </Provider>
    )

    ReactDom.render(element, this.domElement)
  }

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupFields: [
                PropertyPaneTextField('name', {
                  label: strings.NameFieldLabel
                })
              ]
            }
          ]
        }
      ]
    }
  }
}

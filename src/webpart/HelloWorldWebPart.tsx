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
import { IState} from '../reducers'
import { updateProperty, initProperties } from '../reducers/webpart'
import configureStore from '../configureStore'
import HelloWorldContainer from '../containers/HelloWorldContainer'

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  store: Store<IState>

  public constructor(context: IWebPartContext) {
    super(context)

     this.store = configureStore()
  }

  public render(): void {
    const element = (
      <Provider store={this.store}>
        <HelloWorldContainer />
      </Provider>
    )

    ReactDom.render(element, this.domElement)
  }

  protected onPropertyChanged(propertyPath, oldValue, newValue) {
    this.store.dispatch(updateProperty(propertyPath, newValue))
  }

  protected onInit() {
    this.store.dispatch(initProperties(this.properties))

    return Promise.resolve(true)
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

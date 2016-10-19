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
import { IState} from '../../reducers'
import configureStore from '../../configureStore'
import { HelloWorld } from '../../components/HelloWorld'

export interface IHelloWorldWebPartProps {
  name: string
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  store: Store<IState>

  public constructor(context: IWebPartContext) {
    super(context)

    this.store = configureStore({})
  }

  public render(): void {
    const element = (
      <Provider store={this.store}>
        <HelloWorld name={this.properties.name} />
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

import * as React from 'react'
import * as ReactDom from 'react-dom'
import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base'
import { observable, ObservableMap } from 'mobx'

import * as strings from 'helloWorldStrings'
import IHelloWorldWebPartProps from './IHelloWorldWebPartProps'
import HelloWorldContainer from '../containers/HelloWorldContainer'

export class WebpartStore {
  @observable properties = new ObservableMap()
}
export class Store {
  @observable webpart = new WebpartStore()
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  store = new Store()

  public constructor(context: IWebPartContext) {
    super(context)
  }

  public render(): void {
    if (this.renderedOnce) { return }

    const element = (
      <HelloWorldContainer webpart={this.store.webpart} />
    )

    ReactDom.render(element, this.domElement)
  }

  protected get disableReactivePropertyChanges() {
    return this.properties ? this.properties.disableReactive : false
  }

  protected onPropertyChanged(propertyPath, oldValue, newValue) {
    if (!this.disableReactivePropertyChanges) {
      this.store.webpart.properties.set(propertyPath, newValue)
    }
  }

  protected onInit() {
    this.store.webpart.properties.clear()
    this.store.webpart.properties.merge(this.properties as {})

    return Promise.resolve(true)
  }

  protected onAfterPropertyPaneChangesApplied() {
    this.store.webpart.properties.merge(this.properties as {})
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

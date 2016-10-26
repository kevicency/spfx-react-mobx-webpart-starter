import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { whyRun } from 'mobx'

import { WebpartStore } from '../store'
import Greeter from '../components/Greeter'

interface IHelloWorldContainerProps {
  webpart: WebpartStore
}

const HelloWorldContainer = ({ webpart: { properties } }: IHelloWorldContainerProps) => (
  <div>
    { console.log(whyRun()) }
    <Greeter name={properties.get('name')} />
    <pre>{ JSON.stringify({ reactive: !properties.get('disableReactive') }) }</pre>
  </div>
)

export default inject(store => ({
  webpart: store.webpart as WebpartStore
}))(observer(HelloWorldContainer))

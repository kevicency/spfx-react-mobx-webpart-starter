import * as React from 'react'
import { observer } from 'mobx-react'
import { whyRun } from 'mobx'

import Greeter from '../components/Greeter'

const HelloWorldContainer = ({ webpart: { properties } }) => (
  <div>
    { console.log(whyRun()) }
    <Greeter name={properties.get('name')} />
    <pre>{ JSON.stringify({ reactive: !properties.get('disableReactive') }) }</pre>
  </div>
)

export default observer(HelloWorldContainer)

import * as React from 'react'
import { observer } from 'mobx-react'

import Greeter from '../components/Greeter'

const HelloWorldContainer = ({ webpart: { properties } }) => (
  <div>
    <Greeter name={properties.name} />
    <pre>{ JSON.stringify({ reactive: !properties.reativeDisabled }) }</pre>
  </div>
)

export default observer(HelloWorldContainer)

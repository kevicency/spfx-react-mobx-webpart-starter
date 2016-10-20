import * as React from 'react'
import { connect } from 'react-redux'

import { IState } from '../reducers'
import Greeter from '../components/Greeter'

const mapStateToProps = (state: IState) => ({
  name: state.webpart.properties.name,
  reactive: !state.webpart.properties.disableReactive
})

const HelloWorldContainer = ({ name, reactive }) => (
  <div>
    <Greeter name={name} />
    <pre>{ JSON.stringify({ reactive }) }</pre>
  </div>
)

export default connect(mapStateToProps)(HelloWorldContainer)

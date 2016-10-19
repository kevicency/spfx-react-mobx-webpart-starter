import * as React from 'react'
import { connect } from 'react-redux'

import { IState } from '../reducers'
import Greeter from '../components/Greeter'

const mapStateToProps = (state: IState) => ({
  name: state.webpart.properties.name
})

const HelloWorldContainer = ({ name }) => (
  <Greeter name={name} />
)

export default connect(mapStateToProps)(HelloWorldContainer)

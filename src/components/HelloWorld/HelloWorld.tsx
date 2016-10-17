import * as React from 'react'

import styles from './HelloWorld.scss'

export interface IHelloWorldProps {
  name: string
}

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={styles.container}>
        Hello {this.props.name}!
      </div>
    )
  }
}

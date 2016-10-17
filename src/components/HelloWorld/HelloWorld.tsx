import * as React from 'react'

import styles from './HelloWorld.module.scss'

export interface IHelloWorldProps {
  name: string
}

export class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={styles.container}>
        Hello {this.props.name}!
      </div>
    )
  }
}

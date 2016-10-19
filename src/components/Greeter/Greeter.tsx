import * as React from 'react'

import styles from './Greeter.module.scss'

export interface IGreeterProps {
  name: string
}

export default class Greeter extends React.Component<IGreeterProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={styles.container}>
        Hello {this.props.name}!
      </div>
    )
  }
}

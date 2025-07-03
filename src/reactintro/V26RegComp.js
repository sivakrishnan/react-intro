import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export class V26RegComp extends PureComponent {
  static propTypes = {}

  render() {
    console.log('**************************** Regular Comp Render**********************')
    return (
      <div>
        Regular Component - {this.props.name}
      </div>
    )
  }
}

export default V26RegComp
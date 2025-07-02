import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class V26RegComp extends Component {
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
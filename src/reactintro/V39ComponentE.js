import React, { Component } from 'react'
import V39ComponentF from './V39ComponentF'
import UserContext from './V39UserContext'

export class V39ComponentE extends Component {
    render() {
        return (
            <div>
                Compoent E context {this.context }
                <V39ComponentF></V39ComponentF>
            </div>
        )
    }
}
V39ComponentE.contextType = UserContext;
export default V39ComponentE
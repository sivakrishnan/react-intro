import React, { Component } from 'react'

export class V37User extends Component {
    render() {
        return (
            <div>
                {this.props.render(false)}
            </div>
        )
    }
}

export default V37User 
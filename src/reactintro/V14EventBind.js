import React, { Component } from 'react'

export class V14EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello '
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'Good bye'
        })
    }

    clickHandlerNewApproach = () => {
        this.setState({
            message: 'Good bye From New Approach'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click Bind-Using Bind Function In Render</button>
                <button onClick={() => this.clickHandler()}>Click Bind-Using Arrow Function</button>
                <button onClick={this.clickHandler}>Click Bind-Using Class Constructor</button>
                <button onClick={this.clickHandlerNewApproach}>Click Bind-Using Class Property</button>
            </div>
        )
    }
}

export default V14EventBind
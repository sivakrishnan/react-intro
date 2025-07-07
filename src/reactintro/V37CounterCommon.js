import React, { Component } from 'react'

export class V37CounterCommon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 };
        }, () => {
            console.log(this.state.count);
        })
    }
    render() {
        return (
            <div>{this.props.render(this.state.count, this.incrementCount)}</div>
        )
    }
}

export default V37CounterCommon
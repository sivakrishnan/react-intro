import React, { Component } from 'react'

export class V36ClickCounterTwo extends Component {
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
        const { count } = this.state;
        return (
            <button onClick={this.incrementCount}>Clicked {count} times</button>
        )
    }
}

export default V36ClickCounterTwo
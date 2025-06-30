import React, { Component } from 'react'

export class V11Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Callback value', this.state.count) // call back function show the updated value
        // })

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }), () => {
            console.log('Callback value', this.state.count) // call back function show the updated value
        })
        console.log(this.state.count) // syncronous 
    }


    incrementByFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <div>V11Counter-{this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementByFive()}>Increment By Five</button>
            </div>
        )
    }
}

export default V11Counter
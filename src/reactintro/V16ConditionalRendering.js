import React, { Component } from 'react'

export default class V16ConditionalRendering extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        return  this.state.isLoggedIn && <div>Using Short Circuit Approach-Welcome Skrish</div>

        return (
            this.state.isLoggedIn ? <div>Using Ternary Approach-Welcome Skrish</div> : <div>Using Ternary Approach-Welcome Guest</div>
        )

        // element variable approach

        let message

        if (this.state.isLoggedIn) {
            message = <div>Using element variable Approach-Welcome Skrish</div>;
        }
        else {
            message = <div>Using element variable Approach-Welcome Guest</div>;
        }
        return <div>{message}</div>;
        // using if else approach
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <div>Using if else Approach-Welcome Skrish</div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div>Using if else Approach-Welcome Guest</div>
                </div>
            )
        }


    }
}

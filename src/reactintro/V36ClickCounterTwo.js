import React, { Component } from 'react'

export class V36ClickCounterTwo extends Component {

    //moved this common code to v37countercommon.js file
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }

    // incrementCount = () => {
    //     this.setState((prevState) => {
    //         return { count: prevState.count + 1 };
    //     }, () => {
    //         console.log(this.state.count);
    //     })
    // }

    render() {
        const { count, incrementCount } = this.props;
        return (
            <button onClick={incrementCount}>Clicked {count} times</button>
        )
    }
}

export default V36ClickCounterTwo
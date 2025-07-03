import React, { Component } from 'react'
import V29RefInClassComp from './V29RefInClassComp';

export class V29FocusInput extends Component {

    constructor(props) {
        super(props)

        this.componentRef = React.createRef();
    }
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <V29RefInClassComp ref={this.componentRef}></V29RefInClassComp>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default V29FocusInput
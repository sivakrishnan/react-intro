import React, { Component } from 'react'
import V30FRDInput from './V30FRDInput'

export class V30FRDParentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }
    clickHandler = () => {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <V30FRDInput ref={this.inputRef}>
                    
                </V30FRDInput>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default V30FRDParentInput
import React, { Component } from 'react'
import V15ChildComponent from './V15ChildComponent'



export class V15ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }

    render() {
        return (
            <V15ChildComponent greetHandler={this.greetParent}></V15ChildComponent>
        )
    }
}

export default V15ParentComponent
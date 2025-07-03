import React, { Component } from 'react'
import UpdatedComponent from './V33WithCounter'

export class V33ClickCounter extends Component {

    render() {
        console.log(this.props.hofProps);
        const { name, count, incrementCount } = this.props;
        return (
            <div>
                <button onClick={incrementCount}> {name}-Click {count} Times</button>
            </div>
        )
    }
}

export default UpdatedComponent(V33ClickCounter, 5)
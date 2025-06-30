import React, { Component } from 'react'

export default class V13ClassClick extends Component {
    clickHandler() {
        console.log('Clicked the button')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>
                    Click Me
                </button>
            </div>
        )
    }
}

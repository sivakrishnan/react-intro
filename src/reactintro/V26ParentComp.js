import React, { Component } from 'react'
import V26RegComp from './V26RegComp';
import V26PureComp from './V26PureComp';
import V27MemoComp from './V27MemoComp';

export class V26ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'skrish'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'skrish'
            })
        }, 2000);
    }
    render() {
        console.log('**************************** Parent Comp Render**********************')
        return (
            <div>
                Parent Component
                <V27MemoComp name={this.state.name}></V27MemoComp>
                {/* <V26RegComp name={this.state.name}>

                </V26RegComp>
                <V26PureComp name={this.state.name}>

                </V26PureComp> */}
            </div>
        )
    }
}

export default V26ParentComp
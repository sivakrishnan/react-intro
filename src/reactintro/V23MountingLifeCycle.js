import React, { Component } from 'react'
import V23MountingLifeCycleChild from './V23MountingLifeCycleChild'

export default class V23MountingLifeCycle extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'skrish'
        }

        console.log('Component Mounting Lifecyle---Parent - Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Component Mounting Lifecyle---Parent - getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('Component Mounting Lifecyle---Parent - componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('Component Mounting Lifecyle---Parent - shouldComponentUpdate');
        return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Component Mounting Lifecyle---Parent - getSnapshotBeforeUpdate');
        return null;
    }


    componentDidUpdate(prevProps, prevState) {
        console.log('Component Mounting Lifecyle---Parent - componentDidUpdate');
    }

    changeState = () => {
        this.setState(() => ({
            name: 'Hello Skrish'
        }), () => {
            console.log(this.state.name)
        })
    }
    render() {
        console.log('Component Mounting Lifecyle---Parent - render');
        return (
            <div>
                <button  onClick={this.changeState}>Update State</button>
                <V23MountingLifeCycleChild></V23MountingLifeCycleChild>

            </div>
        )
    }
}


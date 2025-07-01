import React, { Component } from 'react'

export default class V23MountingLifeCycleChild extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'skrish'
        }

        console.log('Component Mounting Lifecyle---Child - Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Component Mounting Lifecyle---Child - getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('Component Mounting Lifecyle---Child - componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('Component Mounting Lifecyle---Child - shouldComponentUpdate');
        return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Component Mounting Lifecyle---Child - getSnapshotBeforeUpdate');
        return null;
    }


    componentDidUpdate(prevProps, prevState) {
        console.log('Component Mounting Lifecyle---Child - componentDidUpdate');
    }

    render() {
        console.log('Component Mounting Lifecyle---Child - render');
        return (
            <div>V23MountingLifeCycleChild</div>
        )
    }
}


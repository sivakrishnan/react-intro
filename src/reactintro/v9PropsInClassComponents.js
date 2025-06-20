import React, { Component } from "react";

class V9PropsInComponent extends Component {
    render() {
        return <h1>Welcome {this.props.name} -- {this.props.heroName}</h1>
    }
}

export default V9PropsInComponent
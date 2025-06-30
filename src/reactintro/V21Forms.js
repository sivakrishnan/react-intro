import React, { Component } from 'react'

export default class V21Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState(() => ({
            username: event.target.value
        }), () => {
            console.log(this.state.username);
        })


    }
    render() {
        return (
            <div>
                <label>Username</label>
                <input type='text' value={this.state.username}
                    onChange={this.handleUsernameChange}
                ></input>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class V21Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'vue'
        }
    }

    handleUsernameChange = (event) => {
        this.setState(() => ({
            username: event.target.value
        }), () => {
            console.log(this.state.username);
        })
    }

    handleCommentsChange = (event) => {
        this.setState(() => ({
            comments: event.target.value
        }), () => {
            console.log(this.state.comments)
        })
    }
    handleTopicChange = (event) => {
        this.setState(() => ({
            topic: event.target.value
        }), () => {
            console.log(this.state.topic)
        })
    }

    handleFormSubmit = (event) => {
        alert(`${this.state.username}-${this.state.comments}-${this.state.topic}`);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <div>
                        <label>Username</label>
                        <input type='text' value={this.state.username}
                            onChange={this.handleUsernameChange}></input>
                    </div>
                    <br></br>
                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                    </div>
                    <br></br>
                    <div>
                        <label>Topic</label>
                        <select value={this.state.topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <br></br>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}


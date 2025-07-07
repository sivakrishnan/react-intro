import React, { Component } from 'react'
import { UserConsumer } from './V39UserContext'

export class V39ComponentF extends Component {

    render() {

        return (
            // <div>Hai</div>
            <UserConsumer>
                {
                    (username) => {
                        return <div>Hello - {username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default V39ComponentF
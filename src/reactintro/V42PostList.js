import React, { Component } from 'react'
import axios from 'axios'

export class V42PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res)
                this.setState(
                    {
                        posts: res.data
                    }
                )
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        const { posts } = this.state
        return (
            <div>
                List of posts
                {
                    posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : null
                }

            </div>
        )
    }
}

export default V42PostList
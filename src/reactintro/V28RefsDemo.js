import React, { Component } from 'react'

export class V28RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()

        //another approach

        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }

    componentDidMount() {
        this.inputRef.current.focus();
        console.log(this.inputRef);

        if (this.cbRef) {
            this.cbRef.focus();
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
                <button onClick={this.clickHandler}>Click</button>

                <input type='text' ref={this.setCbRef}></input>
            </div>
        )
    }
}

export default V28RefsDemo
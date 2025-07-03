import React from 'react'

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        handleIncrement = () => {
            this.setState((prevState) => {
                return { count: prevState.count + incrementNumber };
            }, () => {
                console.log(this.state.count);
            })
        }

        render() {
            console.log(this.props.hofProps);
            return <OriginalComponent name="skrish" count={this.state.count} incrementCount={this.handleIncrement}{...this.props}></OriginalComponent>
        }
    }
    return NewComponent;
}

export default UpdatedComponent;
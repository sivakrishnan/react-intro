import React, { PureComponent } from 'react'

export class V26PureComp extends PureComponent {
    render() {
        console.log('**************************** Pure Comp Render**********************')
        return (
            <div>
                Pure Component-  {this.props.name}
            </div>
        )
    }
}

export default V26PureComp
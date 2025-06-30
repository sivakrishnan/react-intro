import React from 'react'

export default function V15ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

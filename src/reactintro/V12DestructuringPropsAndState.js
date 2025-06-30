import React from 'react'

// export default function V12DestructuringPropsAndState({ name, heroName }) {
export default function V12DestructuringPropsAndState(props) {
    const { name, heroName } = props
    console.log(props)
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}
 
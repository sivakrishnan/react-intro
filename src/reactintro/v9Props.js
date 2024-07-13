import React from "react";

const V9VarProps = props => {
    return (
        <div>
            <h1>Hello {props.name} - {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default V9VarProps
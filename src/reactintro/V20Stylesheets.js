import React from 'react'
import './V20MyStyle.css'
export default function V20Stylesheets(props) {
    const className = props.primary ? 'primary' : ''
    return (
        <div className={`${className} font-xl`}>V20Stylesheets</div>
    )
}

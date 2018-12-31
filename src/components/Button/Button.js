import React from 'react'

const Button = (props) => {
    return (
        <a className="button" href={props.url}>{props.children}</a>
    )
}

export default Button

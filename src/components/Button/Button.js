import React from 'react'

const Button = (props) => {
    const target = props.target === '_blank' || props.target === '_self' ? props.target : '_blank'

    return (
        <a className="button" href={props.url} target={target}>{props.children}</a>
    )
}

export default Button

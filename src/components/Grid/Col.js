import React from 'react'

const Col = (props) => {
    let classes = 'col'

    for (let point of props.bpoints) {
        classes += ` col-${point}`
    }
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Col

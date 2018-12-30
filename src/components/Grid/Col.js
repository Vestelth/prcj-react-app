import React from 'react'

const Col = (props) => {
    let classes = ''

    for (let point of props.bpoints) {
        classes += `flex-col-${point} `
    }
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Col

import React from 'react'
import PropTypes from 'prop-types'

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

Col.propTypes = {
    bpoints: PropTypes.array.isRequired,
    children: PropTypes.node
}


export default Col

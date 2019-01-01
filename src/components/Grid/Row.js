import React from 'react'
import PropTypes from 'prop-types'

const Row = (props) => {
    return (
        <div className={`row ${props.classes}`}>
            {props.children}
        </div>
    )
}

Row.propTypes = {
    classes: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Row

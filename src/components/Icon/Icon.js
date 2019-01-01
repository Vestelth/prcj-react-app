import React from 'react'
import PropTypes from 'prop-types'


const Icon = (props) => {
    const style = { backgroundImage: `url(${ props.source })` }

    return (
        <i style={style} className="icon"></i>
    )
}

Icon.propTypes = {
    source: PropTypes.string.isRequired
}

export default Icon

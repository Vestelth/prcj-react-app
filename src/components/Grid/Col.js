import React from 'react'
import PropTypes from 'prop-types'

const Col = ({
    xs = '',
    sm = '',
    md = '',
    lg = '',
    children
}) => {
    const classNames = {
        xs: !isNaN(xs) ? `col-xs-${xs}` : '',
        sm: !isNaN(sm) ? ` col-sm-${sm}` : '',
        md: !isNaN(md) ? ` col-md-${md}` : '',
        lg: !isNaN(lg) ? ` col-lg-${lg}` : ''
    }

    let classString = ''
    for (let breakpoint in classNames) {
        classString += classNames[breakpoint]
    }

    return (
        <div className={classString}>
            {children}
        </div>
    )
}

Col.propTypes = {
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    children: PropTypes.node
}


export default Col

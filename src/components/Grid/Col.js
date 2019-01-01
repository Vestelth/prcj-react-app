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
        xs: xs !== '' ? `col-xs-${xs}` : '',
        sm: sm !== '' ? ` col-sm-${sm}` : '',
        md: md !== '' ? ` col-md-${md}` : '',
        lg: lg !== '' ? ` col-lg-${lg}` : ''
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

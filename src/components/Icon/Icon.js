import React from 'react'


const Icon = (props) => {
    const style = { backgroundImage: `url(${ props.src })` }

    return (
        <i style={style} className="icon"></i>
    )
}

export default Icon

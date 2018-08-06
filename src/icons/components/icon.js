import React from 'react';
import './icon.css';
function Icon(props){

    const {
        color,
        size
    } = props

    return(
        <svg className="icon"
        fill = {color}
        height={size}
        width={size}
        viewBox="0 0 32 32">
            {props.children}
        </svg>
    )
}

export default Icon;
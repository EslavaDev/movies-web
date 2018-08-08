import React from 'react'
import './volume.css'
import Figure from '../../icons/components/figure';
const Volume = (props) => (
    <div className="Volume">
        <div onClick={props.handleClick}>
            <Figure.Volume
                size={25}
                color="white"
            />
        </div>
        <div
            className="Volume-range" >
            <input
            value={props.value}
                type="range"
                min={0}
                max={1}
                step={.05}
                onChange={props.handleVolumeChange}
            />
        </div>
    </div>
)

export default Volume

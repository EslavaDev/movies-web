import React from 'react'
import './timer.css';
const Timer = (props) => (
    <div className="Timer">
      <p>
      <span>{props.currentTime}/{props.duration}</span>
      </p>
    </div>
  )

export default Timer

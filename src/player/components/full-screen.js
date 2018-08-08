import React from 'react';
import './full-screen.css';
import Figure from '../../icons/components/figure';
const FullScreen = (props) => (
    <div 
        className="FullScreen"
        onClick={props.handleFullScreen}
    >
      <Figure.FullScreen 
      size={25}
      color="white"
      />
    </div>
  )

export default FullScreen

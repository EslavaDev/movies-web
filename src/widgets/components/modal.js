import React from 'react';
import './modal.css';
const Modal = (props) => {
  return (
    <div className="Modal">
      {props.children}
    </div>
  )
}

export default Modal

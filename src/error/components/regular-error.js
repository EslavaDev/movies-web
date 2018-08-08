import React from 'react'

import './regular-error.css';
const RegularError = (props) => {
  return (
    <div className="RegularError">
    <h1 style={{color:'white'}}>Ha ocurrido un error</h1>
    <p>Es posible que no haya conexión con el servidor o algún proceso ha dejado de funcionar.</p>
    <a href='http://www.google.com'>Preguntas frecuentes</a>
    
    </div>
  )
}

export default RegularError

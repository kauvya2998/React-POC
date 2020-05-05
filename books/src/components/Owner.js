import React from 'react'
import ReactDOM from 'react-dom'

function Owner(props) {
    return ReactDOM.createPortal( (
        <div>
        {props.children}
        <button onClick={props.onClose}>Close</button>
        </div>
    ),document.getElementById('portal'))
}

export default Owner

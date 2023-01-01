import React from 'react'

function Alert(props) {
  return (
    <div className={`alert alert-${props.alert && props.alert.type} alert-dismissible fade ${props.alert && props.alert.show}`} role="alert">
        <strong>{props.alert && props.alert.message}</strong>
    </div>
  )
}

export default Alert

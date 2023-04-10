import React from 'react'

const Button = ({SnsName}) => {
  <div className="button">
    <div className="icon">
      <i className={`fa fa-${SnsName.toLowerCase()}`}></i>
    </div>
    <span>{SnsName}</span>
  </div>
}

export default Button
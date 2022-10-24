import React from 'react'

const InputGroup = ({children, margin, icon}) => {
  return (
    <div className = {margin}>
        <div className="input-group-append">
            <span className="input-group-text"><i className={icon}></i></span>
        </div>
        {children}
     </div>
  )
}

export default InputGroup

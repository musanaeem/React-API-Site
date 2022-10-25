import React from 'react'

const InputGroup = ({children, className, icon}) => {
    return (
        <div className={className}>
            <div className="input-group-append">
                <span className="input-group-text"><i className={icon}></i></span>
            </div>
            {children}
        </div>
    )
}

export default InputGroup

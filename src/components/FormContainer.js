import React from 'react'
import { Link } from 'react-router-dom'

const FormContainer = ({link, title, children, accountMessage, alternateTitle}) => {
  return (

    <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
            <div className="user-card">
                <div className="d-flex justify-content-center">
                    <h3 className="form-title">{title}</h3>
                </div>

                <div className="d-flex justify-content-center form-container">
                    {children}
                </div>

                <div className="mt-4">
                    <div className="d-flex justify-content-center links">
                        {accountMessage} <Link to={link} className="ml-2">{alternateTitle}</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormContainer

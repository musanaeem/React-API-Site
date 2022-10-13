import React from 'react'

function FormContainer({title, form, accountMessage, alternateTitle}) {
  return (

    <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
            <div className="user-card">
                <div className="d-flex justify-content-center">
                    <h3 className="form-title">{title}</h3>
                </div>

                <div className="d-flex justify-content-center form-container">
                    {form()}
                </div>

                <div className="mt-4">
                    <div className="d-flex justify-content-center links">
                        {accountMessage} <a href="{% url 'register' %}" className="ml-2">{alternateTitle}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormContainer

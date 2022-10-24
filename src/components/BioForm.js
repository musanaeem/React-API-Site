import React from 'react'
import InputGroup from './InputGroup'

const BioForm = () => {

  return (
    <form action="">
        
        <InputGroup margin='input-group mb-3' icon='fas fa-id-badge'>
            <input type="text" name="name" placeholder="Name..." className="form-control" />
        </InputGroup>

        <InputGroup margin='input-group mb-3' icon='fas fa-id-badge'>
            <input type="text" name="address" placeholder="Address..." className="form-control" />
        </InputGroup>

        <InputGroup margin='input-group mb-3' icon='fas fa-id-badge'>
            <input type="text" name="description" placeholder="Description..." className="form-control" />
        </InputGroup>


        <div className="d-flex justify-content-center mt-3 login-container">
          <input className="btn login-btn" type="submit" value="Submit" />
        </div>
      </form>
  )
}

export default BioForm

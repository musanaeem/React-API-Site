import React from 'react'
import { useLocation } from 'react-router-dom'
import BioForm from '../components/BioForm';
import BlogForm from '../components/BlogForm';
import FormContainer from '../components/FormContainer';
import '../components/bioCreateStyle.css'

function UpdateOrCreate() {

    const { state } = useLocation();

  return (
    <div className='UpdateOrCreate'>
        
      <FormContainer>
        { state.type === 'Bio' ? <BioForm/> : <BlogForm/> }
      </FormContainer>
    </div>
  )
}

export default UpdateOrCreate

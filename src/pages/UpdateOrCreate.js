import React from 'react'
import BioForm from '../components/BioForm';
import BlogForm from '../components/BlogForm';
import FormContainer from '../components/FormContainer';
import '../components/bioCreateStyle.css'

const UpdateOrCreate = (props) => {

    return (
        <div className='UpdateOrCreate'>
            <FormContainer>
                { props.type === 'Bio' ? <BioForm  method={props.method}/> : <BlogForm   method={props.method}/> }
            </FormContainer>
        </div>
    )
}

export default UpdateOrCreate

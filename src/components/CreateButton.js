import React from 'react'
import { Link } from 'react-router-dom'
import '../components/createButtonStyle.css'

const CreateButton = (props) => {
  return (
    <Link className="create_text" to={props.path} > Create New </Link>
  )
}

export default CreateButton

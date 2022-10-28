import React from 'react'
import '../components/recordContainerStyle.css'

const RecordContainer = (props) => {

  return (
    <div className={`${props.className} record`}>
        <div className="labels">
            {props.children}
        </div> 
    </div>
  )
}

export default RecordContainer

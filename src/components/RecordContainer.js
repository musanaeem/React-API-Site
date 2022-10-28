import React from 'react'
import '../components/recordContainerStyle.css'
import Methods from './Methods';

const RecordContainer = ({recordClassName, type, children, id, data}) => {


  return (
    <div className={`${recordClassName} record`}>
        <div className="labels">
            {children}
        </div>

        <Methods  type={type} data={data} id={id}/>

    </div>
  )
}

export default RecordContainer

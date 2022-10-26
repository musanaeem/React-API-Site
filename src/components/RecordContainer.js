import React from 'react'
import '../components/recordContainerStyle.css'

const RecordContainer = (props) => {

    const getClassName = () => {
        let className = props.className + " record";

        return className
    }

  return (
    <div className={getClassName()}>
        <div className="labels">
            {props.children}
        </div> 
    </div>
  )
}

export default RecordContainer

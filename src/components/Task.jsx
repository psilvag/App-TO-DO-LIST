import React from 'react'
import '../stylesSheets/Task.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { AiTwotoneEdit } from 'react-icons/ai'


const Task = ({ id, text, completed, taskcomplete, deletetask, editTask }) => {
  return (
    <div className={completed ? 'task-container completed ' : 'task-container'}>

      <div className='task-text' onClick={() => taskcomplete(id)}>
        {text}
      </div>

      <div className='task-container-icons' onClick={() => editTask(id)}>
        <AiTwotoneEdit className='task-icon-edit' />
      </div>

      <div className='task-container-icons' onClick={() => deletetask(id)}>
        <AiOutlineCloseCircle className='task-icon-close' />
      </div>




    </div>


  )
}

export default Task
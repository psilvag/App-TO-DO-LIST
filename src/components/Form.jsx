import React from 'react'
import '../stylesSheets/Form.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'
import { useRef } from 'react'

import {AiOutlineFileAdd} from 'react-icons/ai'
import {AiOutlineEdit} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'
export const Form = ({ addTask, deleteAllTasks, updateTask, setUpdateTask }) => {

  const [input, setInput] = useState('')
  const formdata = useRef()


  const changeForm = e => {
    setInput(e.target.value)
  }

  useEffect(() => {
    if (updateTask) {

      formdata.current.textTask.value = updateTask.text

    }

  }, [updateTask])

  const newTask = e => {
    e.preventDefault()

    const newTaskObject = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    if (updateTask) {
      if (input !== '') {
        updateTask.text = input
        setUpdateTask()
        e.target.textTask.value = ''
        setInput('')

      }
    }

    else {
      addTask(newTaskObject)
      e.target.textTask.value = ''
      setInput('')

    }


  }


  return (

    <form ref={formdata} className='task-form' onSubmit={newTask} >

      <input
        id='textTask'
        className='task-input'
        type='text'
        placeholder='Input new task'
        name='texto'
        onChange={changeForm}
      />

      <button className='task-button' >{updateTask ? <AiOutlineEdit className='edit-icon'/> : <AiOutlineFileAdd className='add-icon'/>}</button>
      <button className='task-button-delete' onClick={deleteAllTasks}><AiOutlineDelete className='delete-icon'/></button>

    </form>

  )
}

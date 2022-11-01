import React from 'react'
import { useState } from 'react'
import { Form } from './Form'
import Task from './Task'
import '../stylesSheets/TaskList.css'


export const TaskList = () => {

  const [tasks, setTasks] = useState([])
  const [updateTask, setUpdateTask] = useState()


  //=====CREATE A NEW TASK=====
  const addTask = newObjectTask => {

    if (newObjectTask.text.trim()) {
      newObjectTask.text = newObjectTask.text.trim()
      const currentTasks = [...tasks, newObjectTask]
      setTasks(currentTasks)


    }

  }

  //=====DELETE ALL TASKS=====
  const deleteTask = id => {
    const currentTasks = tasks.filter(task => task.id !== id)
    setTasks(currentTasks)
  }

  //=====TASK COMPLETE=====
  const taskComplete = id => {

    const currentTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed

      }
      return task
    })
    setTasks(currentTasks)
  }


  const editTask = (id) => {

    const currentTasktoEdit = tasks.find(task => task.id === id)
    if (currentTasktoEdit.completed === false) {
      setUpdateTask(currentTasktoEdit)
    }
    else {
      window.alert('la tarea esta completada, no se puede editar')
    }


  }



  const deleteAllTasks = () => {
    setTasks([])
  }

  const saveTask = (id, newTask) => {
    console.log(newTask);
  }

  return (
    <>

      <Form
        addTask={addTask}
        deleteAllTasks={deleteAllTasks}
        updateTask={updateTask}
        setUpdateTask={setUpdateTask}

      />
      <div className='task-list-container'>
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              deletetask={deleteTask}
              taskcomplete={taskComplete}
              editTask={editTask}


            />
          )
        }
      </div>
    </>
  )
}

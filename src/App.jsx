import { useState } from 'react'
import './App.css'
import programacion from './imagenes/to-do-list.jpg'
import { TaskList } from './components/TaskList'
function App() {


  return (
    <div className="App-task">
      <div className='image-container'>
        <img
          src={programacion}
          className="image-app"
        />
      </div>


      <div className='principal-list-task'>
        <h1>My Tasks</h1>
        <TaskList />

      </div>

    </div>
  )
}

export default App

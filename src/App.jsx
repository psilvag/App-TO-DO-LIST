import { useState } from 'react'
import './App.css'
import { FaThList } from 'react-icons/fa'
import { TaskList } from './components/TaskList'
function App() {


  return (
    <div className="App-task">
      <div className='image-container'>
        <h1>To do list</h1>
        <FaThList style={{ fontSize: "40px" }} />
      </div>


      <div className='principal-list-task'>
        <h1>My Tasks</h1>
        <TaskList />

      </div>

    </div>
  )
}

export default App

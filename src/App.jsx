import React from 'react'
import "./index.css"
import TodoDateTime from './component/TodoDateTime'
import TodoList from './component/TodoList'
import Toggle from './component/Toggle'

const App = () => {
  return (
    <>
    <div className='top-div'>
      <h3>Made by Shadaf Hossain</h3>
      <Toggle/>
    </div>
      <div className='container'>
    <h1> React Todo </h1>
    <TodoDateTime/>
    <TodoList/>
    </div>
    </>
  )
}

export default App
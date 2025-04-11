import React, { useState } from 'react'

const TodoDateTime = () => {

const [dateTime,setDateTime]=useState(null)

const getTime=()=>{
    const now=new Date();
    const time=now.toLocaleTimeString();
    const date=now.toLocaleDateString();
    setDateTime(`${date} - ${time}`)
}

setInterval(()=>{
    getTime()
},1000)

  return (
    <h3>{dateTime}</h3>
  )
}

export default TodoDateTime
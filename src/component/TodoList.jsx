import React, { useEffect, useState } from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoList = () => {
    const [inputValue, setInputValue]=useState("")
    const [task, setTask]=useState(()=>{
      let todo=localStorage.getItem("Todo")
      if(todo){
        let data=JSON.parse(todo)
        return data
      }
       else if(!todo){
        return []
      }
    })
    const [isupdate, setUpdate]=useState(false)
    const [isIndex,setIndex]=useState(null)

   const handleAddBtn=()=>{
    if(!inputValue) return;
    if(task.some((item)=>item.value==inputValue)){
        setInputValue("")
        return;
    }
    setTask((prev)=>[...prev,{value:inputValue,check:false}])
    setInputValue("")
   }

   const handleTodoDelete=(value)=>{
    const newtask=task.filter((item)=> item.value !== value);
    setTask(newtask)
   }

   const handleClearTodo=()=>{
    setTask([])
   }

   const handleCheck=(index)=>{
    const mark=task.map((item,i)=>i === index ? { ...item, check: !item.check } : item)
    setTask(mark)
   }

   const handleEdit=(index)=>{
     setInputValue(task[index].value)
    setUpdate(true)
    setIndex(index)
   }

   const handleUpdate=()=>{
    const newArr=[...task]
    newArr[isIndex]={...newArr[isIndex],value:inputValue}
    setTask(newArr)
    setInputValue("")
    setUpdate(false);
   }

   // Add Local Storage
   useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(task))
  }, [task])

  return (
    <>
    <div className='inputBox'>
        <input type='text' placeholder='Add Your List' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={isupdate?handleUpdate:handleAddBtn}>{isupdate?"Update":"Add"}</button>
    </div>
    <ul>
  {task.map((currentElement, index) => (
    <li key={index} className={currentElement.check? "checked" : "unchecked"}>{currentElement.value}
    <div className='buttons'>
    <button onClick={()=>handleCheck(index)}> <span style={{background:"green"}}><FaRegCheckCircle /></span> </button>
    <button onClick={()=> handleEdit(index)} > <span style={{background:"yellow"}} ><FaEdit/> </span></button>
    <button onClick={()=>handleTodoDelete(currentElement.value)}> <span style={{background:"red"}} ><MdDeleteForever/> </span></button>
    </div>
    </li>
  ))}
</ul>
<button className='clearBtn' onClick={handleClearTodo}> Clear All</button>
    </>
)}

export default TodoList
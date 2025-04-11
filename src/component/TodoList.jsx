import React, { useState } from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoList = () => {
    const [inputValue, setInputValue]=useState("")
    const [task, setTask]=useState([])
    const [isCheck, setCheck]=useState(false)
    const [isupdate, setUpdate]=useState(false)
    const [isIndex,setIndex]=useState(null)

   const handleAddBtn=()=>{
    if(!inputValue) return;
    if(task.includes(inputValue)){
        setInputValue("")
        return;
    }
    setTask((prev)=>[...prev,inputValue])
    setInputValue("")
   }

   const handleTodoDelete=(value)=>{
    const newtask=task.filter((item)=> item !== value);
    setTask(newtask)
   }

   const handleClearTodo=()=>{
    setTask([])
   }

   const handleCheck=(index)=>{
    const mark=task.map((item,i)=>{
        if(i==index){
        setCheck(!isCheck)
        }
    })
    return mark
   }

   const handleEdit=(index)=>{
     setInputValue(task[index])
    setUpdate(true)
    setIndex(index)
   }

   const handleUpdate=()=>{
    const newArr=[...task]
    newArr[isIndex]=inputValue
    setTask(newArr)
    setInputValue("")
    setUpdate(false);
   }

  return (
    <>
    <div className='inputBox'>
        <input type='text' placeholder='Add Your List' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={isupdate?handleUpdate:handleAddBtn}>{isupdate?"Update":"Add"}</button>
    </div>
    <ul>
  {task.map((currentElement, index) => (
    <li key={index} className={isCheck? "checked" : "unchecked"}>{currentElement}
    <div className='buttons'>
    <button onClick={()=>handleCheck(index)}> <span style={{background:"green"}}><FaRegCheckCircle /></span> </button>
    <button onClick={()=> handleEdit(index)} > <span style={{background:"yellow"}} ><FaEdit/> </span></button>
    <button onClick={()=>handleTodoDelete(currentElement)}> <span style={{background:"red"}} ><MdDeleteForever/> </span></button>
    </div>
    </li>
  ))}
</ul>
<button className='clearBtn' onClick={handleClearTodo}> Clear All</button>
    </>
)}

export default TodoList
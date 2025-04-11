import React, { useState } from 'react'

const Toggle = () => {
    const[toggle,setToggle]=useState(false)
    const handleToggle=()=>{
        setToggle(!toggle)
    }

  return (
    <>
        <div className={`main ${toggle ? "on" : "off"}`} onClick={handleToggle}>
        <div className={`box ${toggle ?"on-box" : "off-box"}`}>
        <span>{toggle ? "on" :"off"}</span>
        </div>
        </div>
    </>
  )
}

export default Toggle
import { useState } from "react";

const Addtask=(props)=>{
    const[task,settask]=useState("react");
    const handleclickoption=(e)=>{
        e.preventDefault();
        if(task.trim()==="")return;
        console.log(props)
        props.getdata(task);
        settask("");
      
    }
    const changeoption=(e)=>{
        console.log(e.target.value);
        settask(e.target.value)
       

    }
  return(
    <form>
        <input onChange={changeoption} 
        value={task}
        type="text" 
        placeholder="Add a new task"/>

        <button onClick={handleclickoption}>Add task</button>
        <h1>{task}</h1>
    </form>
  )

}
export default Addtask;
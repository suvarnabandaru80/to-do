import { useState } from 'react';
import './App.css';
import Addtask from './components/Addtask';
import Tasklist from './components/Tasklist';
const Task_ARRAY=["react","javaascript","java","python"];

function App() {
  const [taskarray,settaskarray]=useState(Task_ARRAY) 
   const fru="apple"
   const addadatatotask=(task)=>{
    console.log(task,"from app");
       settaskarray([...taskarray,task])
       console.log(taskarray)
   };
    const deleteTask = (index) => {
    const updatedTasks = taskarray.filter((_, i) => i !== index);
    settaskarray(updatedTasks);
  };
  return (
    <div>
     <Addtask data={fru} getdata={addadatatotask}/>
     <Tasklist taskdata={taskarray} onDelete={deleteTask}/>
    </div>
  );
}

export default App;

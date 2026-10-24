import {useReducer, useState,useEffect,useContext} from 'react'
import {Data} from '../App'
import Draggable from './Draggable'
import Droppable from './Droppable'
import { DndContext } from '@dnd-kit/core'
import { motion } from "framer-motion";
function Dashboard() {
   const{task,setTask,show,setShow,dropArea,error}=useContext(Data)
    console.log(task)
    const[add,setAdd]=useState(false)
    
    const[data,setData]=useState({
        title:'',
        piority:'',
        date:'',
    })
    const initial={
      opacity:0,
      x:-100,
    }
    const transition={
      duration:0.5
     }
    
    const animate={
      opacity:1,
      x:0
    }
  const[isEdit,setIsEdit]=useState(false)
  const[editId,setEditId]=useState("")
  const[editTask,setEditTask]=useState("")
    const handleChange=(event)=>{
       const{name,value}=event.target
    setData({...data,[name]:value})
    }
  const save=()=>{
    if(!isEdit){
 if(data.title==='' || data.piority==='' || data.date ===''){
        alert("Please fill all the fields")
      }
 else{
   
setTask([...task,{
        id:crypto.randomUUID(),
        title:data.title,
        piority:data.piority,
        date:data.date,
        status:"To-do"
    }])

    setData({ 
         title:'',
        piority:'',
        date:'',
        
    })  
     setAdd(false)
  
    }
      }
    else{
      if(data.title==='' || data.piority==='' || data.date ===''){
        alert("Please fill all the fields")
      }
      else{
       const newTask=task.map((task)=>task.id===editId ? {...task,title:data.title,piority:data.piority,date:data.date}:task)
       console.log(newTask)
      setTask(newTask)
         setData({ 
         title:'',
        piority:'',
        date:'',
        
    })  
       setIsEdit(false)
      }
    }
   
       }
   
const handleDelete=(id)=>{
    let newArray=task.filter(items=>id!==items.id);
    setTask(newArray)
}
 
  
  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(task))
 },[task])

    const handleDrag=(event) =>{
     const{active,over}=event
     if(!over) return;
    setTask(task.map(item =>
      item.id === active.id
        ? { ...item, status: over.id }
        : item
    )
  );
   
    }
   const handleEdit=(id)=>{
    setIsEdit(true)
    setEditId(id)
  let  newObject= task.find(val=>id===val.id )
   setEditTask(newObject)
   console.log(newObject)
   setData(newObject)
  
   }
let handleClose=()=>{
  if(!isEdit){
    setAdd(false)
  }
  else{
    setIsEdit(false)
  }
}
  return (
    <>
    <button className="add-task" onClick={()=>setAdd(true) }>Add New Task</button>
    {error &&  <motion.div className="no-result" initial={initial} animate={animate} transition={transition}>No Result Found</motion.div> }
   
    { (add||isEdit)&&<div className='modal-wrapper'>
        <div className="modal-box" >
        <div className="close" onClick={handleClose}><i class="fa-solid fa-xmark"></i></div>
          <h1>Task Details</h1>
        <input className="title" type="text" placeholder="Project title" name="title" value={data.title} onChange={(e)=>handleChange(e)} />
      <div className="labels"> <label>
      <input type="radio" name="piority" value="low" checked={data.piority==="low"} onChange={(e)=>handleChange(e)} />
      Low
    </label>
     <label>
      <input type="radio" value="Medium"  name="piority" value="medium" checked={data.piority==="medium"} onChange={(e)=>handleChange(e)} />
      Medium
    </label>
     <label>
      <input type="radio"  value="High"  name="piority" value="high" checked={data.piority==="high"} onChange={(e)=>handleChange(e)} />
      High
    </label></div>
   
          <input type="date"  className="date" placeholder="Set Due Date"  name="date" value={data.date} onChange={(e)=>handleChange(e)} />
          <button className="save"  onClick={save}>Save</button>
            </div></div>}
            <DndContext onDragEnd={handleDrag}>
                <div className= "task-wrapper">
     
      {  dropArea.map((val,index)=>(
            <Droppable key={index} area={val} task={task}  handleDelete={handleDelete} handleEdit={handleEdit}/>
             
        ))
      }     
    </div>          
               </DndContext>
    </>
  )
}

export default Dashboard
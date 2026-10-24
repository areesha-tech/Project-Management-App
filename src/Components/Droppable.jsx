import { useDroppable } from "@dnd-kit/core"
import {Data} from '../App'
import {useContext} from 'react'
import Draggable from './Draggable'
function Droppable({area,task,handleDelete,handleEdit}) {
    const{toggle,show,setError}=useContext(Data)
    const {setNodeRef}=useDroppable({
    id:area
  })
  return (
    <>
       <div  className= {toggle? "task-cards darkmode": "task-cards"} ref={setNodeRef} >
        <div className="card-head" >
                 <h3  >{area}</h3> 
                  <div className="icons">
                <div className="count">{task.filter((items)=>
                  items.status===area
                ).length}</div>
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
            </div>
            {show.length>0?  show.filter((items)=>items.status===area).map((items)=>(<Draggable key={items.id} items={items}
      handleDelete={handleDelete} handleEdit={handleEdit}
               /> )): task.filter((items)=>items.status===area).map((items)=>(
 <Draggable key={items.id} items={items}
      handleDelete={handleDelete} handleEdit={handleEdit}
               />
              
            ))}
            
         


    
           
           
        
        </div>
    </>
  )
}

export default Droppable
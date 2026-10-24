import {useDraggable}  from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";
function Draggable({items,handleDelete,handleEdit}) {
     const{
        attributes,
        listeners,
        transform,
        setNodeRef
    }=useDraggable({
        id:items.id
    })
    
  return (
    
<>
  

    <motion.div className="project"  {...listeners} {...attributes} style={{transform:CSS.Translate.toString(transform)}} ref={setNodeRef} layout>
            <h3>{items.title}</h3>
            <p> <i className={items.piority==="low"?"fa-solid fa-circle green-dot " : items.piority==="medium"?"fa-solid fa-circle yellow-dot" : "fa-solid fa-circle red-dot" }></i>{items.piority}</p>
            <p><i className="fa-solid fa-calendar"></i>{items.date}</p>
            <div className="buttons">
            <button className="delete" onClick={(e)=>{e.stopPropagation(); handleDelete(items.id)}}>Delete</button>
             <button className="edit" onClick={(e)=>{e.stopPropagation(); handleEdit(items.id)}} >Edit</button>

              </div>

        </motion.div> 
   
    



           
    </>
  )
}

export default Draggable
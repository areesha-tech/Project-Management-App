import { Route,Routes } from 'react-router-dom'
import { createContext,useState } from 'react'
import Layout from './Components/Layout'
import Projects from './pages/Projects'
import Dashboard from './Components/Dashboard'
import Setting from './pages/Setting'
import Droppable from './Components/Droppable'
import Draggable from './Components/Draggable'
export const Data=createContext();
function App() {
  const [toggle,setToggle]=useState(false)
  const[dropArea,setDropArea]=useState(['To-do','In-progress','Done'])
    const[show,setShow]=useState([])
    const[error,setError]=useState(false);
  const[task,setTask]=useState(()=>
   JSON.parse(localStorage.getItem("task"))||[])
  return(
    <>
    <Data.Provider value={{toggle,setToggle,task,setTask,show,setShow,dropArea,setDropArea,error,setError}}>
       <Routes>
      <Route path='/' element={< Layout />}>
      <Route  index element={<Dashboard/>}/>
       <Route  path='Projects' element={<Projects/>}/>
         <Route path='setting' element={<Setting />}/>
      </Route>
    </Routes>
    </Data.Provider>
  
 </>
  )
 
}

export default App
import {useContext,useState} from 'react'
import {Data} from '../App'
function Navbar() {
  const{toggle,setToggle,setShow,task,setError}=useContext(Data)
  const[search,setSearch]=useState("")
  const handleSearch=(e)=>{
    let value=e.target.value;
    setSearch(value)
    let SearchShow=value.trim().toLowerCase();
       
          let newtask=task.filter(task=>task.title.toLowerCase().includes(SearchShow) )
       setShow(newtask)
 let showError=task.every(task=>!task.title.toLowerCase().includes(SearchShow) )
   setError(showError)
       
      
  
  }
 
  return (
    <>
        <div className= {toggle? "nav-wrapper darkmode": "nav-wrapper"}>
        <div className="head">
            <h2 className= {toggle? "head darkmode": "head h2"}>Project Dashboard</h2>
            <p>Mannage your projects and tasks</p>
        </div>
        <div className="nav-container">
        <div className="search-box">
            <input type="text"  value={search} onChange={(e)=>handleSearch(e)}></input>
        
        </div>
        <div className="buttons">
         <button className="toggle" onClick={()=>setToggle(prev=>!prev)}>
          {toggle?
          <i className="fa-solid fa-moon"></i>: <i className="fa-solid fa-sun"></i>}
        </button>
        <div className="profile">
         
           <img src="https://www.deltasigmapi.org/images/default-source/greek-letters-for-petitions/greek-letters-for-petitions-1.jpg?sfvrsn=7fd47a9b_4" />
        </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Navbar
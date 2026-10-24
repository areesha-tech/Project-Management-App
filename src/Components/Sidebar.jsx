import { NavLink } from "react-router-dom" 
import {Data} from '../App'
import { useContext } from "react"
function Sidebar() {
    const{toggle}=useContext(Data)
  return (
    <>
    <div className= {toggle? "sidebar darkmode darkmode": "sidebar"}>
        <div className="logo">
            <img src="foodImages/icon.jpg"/>
            <h3>TaskFlow</h3>
        </div>
        <NavLink to='/' className="files-wrappper">
            <i class="fa-solid fa-house"></i>
            <h3>DashBoard</h3>
        </NavLink>
         <NavLink to='/projects' className="files-wrappper">
          <i class="fa-solid fa-folder"></i>
            <h3>Projects Record</h3>
        </NavLink>
         <NavLink  to='/setting' className="files-wrappper">
        <i class="fa-solid fa-gear"></i>
            <h3>Settings</h3>
        </NavLink>
         <div className="files-wrappper" onClick={()=>alert("you logged out")}>
       <i className="fa-solid fa-right-from-bracket"></i>
            <h3>Logout</h3>
        </div>
    </div>
    </>
  )
}

export default Sidebar
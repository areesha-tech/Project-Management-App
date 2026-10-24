import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import {Data} from '../App'
import {useContext} from 'react'
function Layout() {
  const{toggle}=useContext(Data)
  return (
    <div>
      <div className= {toggle? "layout darkmode": "layout"}>
      <Sidebar />
      <div className='layout-col'>
        <Navbar />
        <Outlet />
        </div>
        
</div>
    </div>
  )
}

export default Layout
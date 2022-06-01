import React from 'react'
import { Datalist } from '../../components/datalist/Datalist.jsx'
import { Navbar } from '../../components/navbar/Navbar.jsx'
import Sidebar from '../../components/sidebar/Sidebar'
import "./list.scss"

export const List = () => {
  return (
    <div className='list'>
      <Sidebar></Sidebar>
      <div className="listcontainer">
        <Navbar/>
        <Datalist/>
      </div>
    </div>
  )
}

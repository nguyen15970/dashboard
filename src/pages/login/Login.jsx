import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'


export const Login = () => {
  return (
    <div className='login'>
      <Sidebar></Sidebar>
      <div className="logincontainer">
        <Navbar></Navbar>
      </div>
    </div>
  )
}

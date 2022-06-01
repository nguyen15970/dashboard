import React from 'react'
import "./new.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'
import { MdDriveFolderUpload } from "react-icons/md";
import { useState } from 'react';

export const New = ({title,inputs}) => {

  const [file, setFile] = useState("");
  console.log(file)

  return (
    <div className="new">
      <Sidebar/>
      <div className="newcontainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
              file
                ? URL.createObjectURL(file)
                : "https://i.pinimg.com/736x/c3/41/3f/c3413f7c697760db7608ee10e1e234fb.jpg"
            } 
            alt="" />
          </div>
          <div className="right">
            <form action="">
              <div className="forminput">
                  <label htmlFor='file'>
                    Image:<MdDriveFolderUpload className='icon' />
                  </label>
                  <input 
                    type="file" 
                    id='file'  
                    style={{display:"none"}}
                    onChange={(e) =>setFile(e.target.files[0])}
                    />
              </div>
              {inputs.map((input) => (
                <div className="forminput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react';
import { Navbar } from '../../components/navbar/Navbar.jsx'
import Sidebar from '../../components/sidebar/Sidebar'
import { Chart } from '../../components/chart/Chart'
import Table from '../../components/table/Table'
import "./signle.scss"



export const Single = () => {
    return (
      <div className='single'>
        <Sidebar></Sidebar>
        <div className="singlecontainer">
          <Navbar/>
          <div className="top">
            <div className="left">
              <div className="editbutton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg" alt="" className="itemimg" />
                <div className="details">
                  <h1 className="itemtitle">Duy Nguyen</h1>
                  <div className="detailitem">
                    <span className="itemkey">Email:</span>
                    <span className="itemvalue">ldnguyen15970@gmail.com</span>
                  </div>
                  <div className="detailitem">
                    <span className="itemkey">Phone:</span>
                    <span className="itemvalue">+843 429 542 27</span>
                  </div>
                  <div className="detailitem">
                    <span className="itemkey">Address:</span>
                    <span className="itemvalue">TP.HCM</span>
                  </div>
                  <div className="detailitem">
                    <span className="itemkey">Country:</span>
                    <span className="itemvalue">VIETNAM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Chart aspect={3/1} title="User spending (Last 6 Months)"/>
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">Last Transactions</h1>
              <Table/>
          </div>
        </div>
      </div>
    )
  }
  
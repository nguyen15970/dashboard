import React from 'react'
import "./home.scss"
import  Sidebar from "../../components/sidebar/Sidebar"
import { Navbar } from '../../components/navbar/Navbar'
import { Widget } from '../../components/widget/Widget'
import { Chart } from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Table from '../../components/table/Table'

export const Home = () => {
  return (
    <div className='home'>
        <Sidebar></Sidebar>
        <div className="homecontainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="erarning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart aspect={2/1} title="User spending (Last 6 Months)"/>
          </div>
          <div className="listcontainer">
            <div className="listtitle">
             <Table/>
            </div>
          </div>
        </div>
    </div>
  )
}

    
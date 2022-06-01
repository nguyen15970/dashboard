import React from 'react';
import './sidebar.scss'
import { MdDashboard, MdShoppingBag,MdCalendarToday,
        MdDepartureBoard, MdOutlineNotificationsActive,
        MdSettingsSystemDaydream, MdInsertChart,
        MdOutlineSettings, MdPsychology
    
    } from "react-icons/md";
import { BiUser, BiUserCircle, BiLogOut } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../darkModeContext';
import { useContext } from 'react';


const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext)
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/">
                <span className="logo">Dashboard</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/">
                        <li>
                            < MdDashboard className='icon'   />
                            <span>Dashbord</span>
                        </li>
                    </Link>

                    <p className="title">List</p>
                    <Link to="/users" style={{ textDecoration: 'none', color: 'white' }}>
                        <li>
                            <BiUser className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                   <Link to="/products">
                        <li>
                            <MdShoppingBag className='icon'  />
                            <span>Products</span>
                        </li>
                   </Link>
                    <li>
                        <MdCalendarToday className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <MdDepartureBoard className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>

                    <li>
                        <MdInsertChart className='icon' />
                        <span>Status</span>
                    </li>
                    <li>
                        <MdOutlineNotificationsActive className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>

                    <li>
                        <MdSettingsSystemDaydream className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <MdPsychology className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <MdOutlineSettings className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className="title">USERS</p>

                    <li>
                        <BiUserCircle className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <BiLogOut className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            
            {/* <FontAwesomeIcon icon="fa-solid fa-grid-horizontal" /> */}
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
            </div>
        </div>
    );
}

export default Sidebar;

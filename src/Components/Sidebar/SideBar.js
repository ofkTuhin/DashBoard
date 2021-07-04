import { createContext, React, useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { sideBarData } from './SideBarData';
import './sideBar.css'


const SideBar = () => {
  const [sidebar,setSidebar]=useState(false)
  
  const showSidebar=()=>setSidebar(!sidebar)
 
  
    return (
        <>
        
        <div className="navBar">
          <Link to='/' className="menuBar">
            <FaIcons.FaBars onClick={showSidebar} />

          </Link>

        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        
          <ul className="nav-menu-items">
            <li className="nav-menu-toggle">
            <Link to='/' className="menuBar">
            
            </Link>
            </li>
            {sideBarData.map((item,index)=>{
              return(
                <li key={index} className={item.cName} onClick={showSidebar}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        
        </>
    );
};

export default SideBar;
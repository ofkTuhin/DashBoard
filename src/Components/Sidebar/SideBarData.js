import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import Home from '../Home/Home';
export const sideBarData = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'

    },
    {
        title:'Dashboard',
        path:'/dashboard',
        icon:<AiIcons.AiFillDashboard/>,
        cName:'nav-text'

    },
    {
        title:'Email',
        path:'/',
        icon:<AiIcons.AiOutlineMail/>,
        cName:'nav-text'

    },
    {
        title:'Chat',
        path:'/',
        icon:<AiIcons.AiFillWechat/>,
        cName:'nav-text'

    },
    {
        title:'Calender',
        path:'/',
        icon:<AiIcons.AiFillCalendar/>,
        cName:'nav-text'

    },
    {
        title:'Profile',
        path:'/',
        icon:<AiIcons.AiFillProfile/>,
        cName:'nav-text'

    }
]
import React from 'react';
import BarChart from '../Bar/BarChart'
import UniqueVisitors from '../UniqueVisitors/UniqueVisitors';
import './Dashboard.css'


const DashBoard = () => {
    return (
        <div className="dashboard">
           <div className="container">
           <div className="barChart margin">
           <BarChart></BarChart>
           </div>
           <div className="unique-visitors margin">
               <UniqueVisitors></UniqueVisitors>
           </div>
            
           </div>
        </div>
    );
};

export default DashBoard;
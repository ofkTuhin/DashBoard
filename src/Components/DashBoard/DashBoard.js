import React from 'react';
import BarChart from '../Bar/BarChart'
import UniqueVisitors from '../UniqueVisitors/UniqueVisitors';
import TotalRevenue from '../TotalRevenue/TotalRevenue';
import SellBuyLocation from '../SellByLocation/SellBuyLocation';
import RevenueByDevice from '../RevenueByDevice/RevenueByDevice';
import TopSellingProduct from '../TopSellingProducts/TopSellingProduct';
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

           <div className="row margin">
               <div className="element"><TotalRevenue></TotalRevenue></div>
               <div className="element"><SellBuyLocation></SellBuyLocation></div>
           </div>
           <div className="row margin">
               <div className="element"><TopSellingProduct></TopSellingProduct></div>
               <div className="element"><RevenueByDevice></RevenueByDevice></div>
           </div>
           </div>
        </div>
    );
};

export default DashBoard;
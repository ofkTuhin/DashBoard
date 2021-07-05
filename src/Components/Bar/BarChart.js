import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { BarData } from './BarData';
import './Bar.css'

const BarChart = () => {
   
    return (
        <div className="sale">


        {
            BarData.map(data=>{
                return(
                    <div className="sale-info" style={{backgroundColor:`${data.background}`}}>
                        <div className="sale-data">
                        {
                            data.title!='Order'?<h3>${data.amount}</h3>:<h3>{data.amount}</h3>
                            }
                        <p>{data.title}</p>
                        <p><span style={{
                            color:`${data.color}`
                            

                    
                    
                    }}>{data.icon}{data.increment}</span>{data.time}</p>
                        </div>
                        <div className="sale-chart">
                            {data.bar}
                        </div>
                        

                    </div>
                    
                )
            })
        }
           
        </div>
    );
};

export default BarChart;
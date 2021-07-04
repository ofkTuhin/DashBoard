import React from 'react';
import { Bar } from 'react-chartjs-2';
import { BarData } from './BarData';
import './Bar.css'

const BarChart = () => {
    return (
        <div className="sale">


        {
            BarData.map(data=>{
                return(
                    <div className="sale-info">
                        <div className="sale-data">
                        <h3>{data.amount}</h3>
                        <p>{data.title}</p>
                        <p><span>{data.icon}{data.increment}</span>{data.time}</p>
                        </div>
                        <div className="sale-chart">
                            {data.bar}
                        </div>
                        

                    </div>
                    
                )
            })
        }
            {/* <Bar
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            
            
            }}
            width={3000}
            height={1000}
            options={{ maintainAspectRatio: false }}
            /> */}
        </div>
    );
};

export default BarChart;
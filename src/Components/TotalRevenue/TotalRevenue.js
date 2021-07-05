import React from 'react';
import Chart from 'react-google-charts';

const TotalRevenue = () => {
    return (
        <div>
          
            <Chart
  width={'100%'}
  height={'300px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Month','Current Period', 'Previous Period'],
    ['Jan', 4000,3500 ],
    ['Feb', 8170,9300 ],
    ['Mar', 7000, 6000],
    ['Apr', 5030, 3400],
    ['May', 6000,4750 ],
    ['Jun', 7170,5500 ],
    ['Jul', 3660,4330 ],
    ['Aug', 5030, 3650],
    ['Sep', 2800,3450 ],
    ['Oct', 5170, 4700],
    ['Nov', 7360,6500 ],
    ['Dec', 7030,5833 ],
    
   
  ]}
  options={{
    title: 'Total Revenue',
          curveType: 'function',
          legend: { position: 'bottom' }
    
  }}
  rootProps={{ 'data-testid': '2' }}
/>
        </div>
    );
};

export default TotalRevenue;
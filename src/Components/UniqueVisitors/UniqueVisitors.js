import React from 'react';
import Chart from 'react-google-charts';
const UniqueVisitors = () => {
    return (
        <div>
          <h6>New Visitor</h6>
   <Chart
  
  height={'300px'}
  width={'100%'}
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={[
    ['Month','Old visitor', 'Unique visitor'],
    ['Jan', 1000,500 ],
    ['Feb', 1170,300 ],
    ['Mar', 660, 300],
    ['Apr', 1030, 400],
    ['May', 1000,750 ],
    ['Jun', 1170,1000 ],
    ['Jul', 660,330 ],
    ['Aug', 1030, 650],
    ['Sep', 1000,450 ],
    ['Oct', 1170, 700],
    ['Nov', 660,500 ],
    ['Dec', 1030,833 ],
  ]}
  options={{
    legend: { position: "left" },
    // Material design options
   
    isStacked: true,
    
   
  }}
  
  // For tests
  rootProps={{ 'data-testid': '2' }}
/>
        </div>
    );
};

export default UniqueVisitors;
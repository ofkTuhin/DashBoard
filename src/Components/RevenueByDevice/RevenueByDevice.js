import React from 'react';
import Chart from 'react-google-charts';

const RevenueByDevice = () => {
    return (
        <div>
            <Chart
  
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ]}
  options={{
    title: 'My Daily Activities',
    // Just add this option
    pieHole: 0.4,
    height:300,
    width:400
  }}
  rootProps={{ 'data-testid': '3' }}
/>
        </div>
    );
};

export default RevenueByDevice;
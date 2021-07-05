import React from 'react';
import Chart from 'react-google-charts';

const RevenueByDevice = () => {
    return (
        <div>
            <Chart
            width='100%'
  
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Device', 'Revenue'],
    ['Laptop', 1330],
    ['Mobile', 2003],
    ['Desktop', 1650]
   
  ]}
  options={{
    title: 'Revenue By Device',
    legend: { position: 'bottom' },
    // Just add this option
    pieHole: 0.4,
    height:250,
    
    allowHtml:true
    
  }}
  rootProps={{ 'data-testid': '3' }}
/>
        </div>
    );
};

export default RevenueByDevice;
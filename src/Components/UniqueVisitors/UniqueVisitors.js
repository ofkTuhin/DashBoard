import React from 'react';
import Chart from 'react-google-charts';
const UniqueVisitors = () => {
    return (
        <div>
   <Chart
  
  height={'300px'}
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={[
    ['Year','visit'],
    ['2014', 1000, ],
    ['2015', 1170, ],
    ['2016', 660, ],
    ['2017', 1030, ],
    ['2014', 1000, ],
    ['2015', 1170, ],
    ['2016', 660, ],
    ['2017', 1030, ],
    ['2014', 1000, ],
    ['2015', 1170, ],
    ['2016', 660, ],
    ['2017', 1030, ],
  ]}
  options={{
    // Material design options
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    },
    isStacked: true,
    width:900,
    legend: { position: 'bottom' }
  }}
  
  // For tests
  rootProps={{ 'data-testid': '2' }}
/>
        </div>
    );
};

export default UniqueVisitors;
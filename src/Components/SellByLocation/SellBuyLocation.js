import React from 'react';
import Chart from 'react-google-charts';

const SellBuyLocation = () => {
    return (
        <div>
          <h6>Sales By Location</h6>
            <Chart
  width={'100%'}
  height={'150px'}
  chartType="GeoChart"
  data={[
    ['Country', 'Order'],
    ['Germany', 200],
    ['United States', 320],
    ['Brazil', 130],
    ['Canada', 210],
    ['France', 300],
   
  ]}
 
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  mapsApiKey="YOUR_KEY_HERE"
  rootProps={{ 'data-testid': '1' }}
/>
<div>
<Chart
  
  chartType="Table"
  loader={<div>Loading Chart</div>}
  data={[
    ['Country', 'Order','Revenue'],
    ['Germany', 200,1500],
    ['United States', 320,2000],
    ['Brazil', 130,1000],
    ['Canada', 210,1800],
    ['France', 300,700],
    
    
  ]}
  
  formatters={[
    {
      type: 'NumberFormat',
      column: 2,
      options: {
        prefix: '$',
        
      },
    },
    
  ]}
  options={{
   
    allowHtml: true,
    showRowNumber: true,
    height:150,
    width:'100%'
  }}
  rootProps={{ 'data-testid': '5' }}
/> 
</div>
        </div>
    );
};

export default SellBuyLocation;
import React from 'react';
import Chart from 'react-google-charts';

const TopSellingProduct = () => {
    return (
        <div>
          <h6>Top Selling Product</h6>
           <Chart
           width={'100%'}
  
  chartType="Table"
  loader={<div>Loading Chart</div>}
  data={[
    ['Product','Price','sold', 'Revenues'],
    ['Shoes',233,12, 10700],
    ['Sports',233,34, 15400],
    ['Toys',233,6, 12500],
    ['Electronics',233,23, -2100],
    ['Food',233,15, 22600],
    ['Art',233,27, 1100],
  ]}
  formatters={[
    {
      type: 'NumberFormat',
      column: 1,
      options: {
        prefix: '$',
        
      },
    },
    {
        type: 'NumberFormat',
        column: 3,
        options: {
          prefix: '$',
          
        },
      },
  ]}
  options={{
    title: 'Top Selling Product',
    allowHtml: true,
    showRowNumber: true,
    height:300,
    width:'100%'
    
  }}
  rootProps={{ 'data-testid': '5' }}
/> 
        </div>
    );
};

export default TopSellingProduct;
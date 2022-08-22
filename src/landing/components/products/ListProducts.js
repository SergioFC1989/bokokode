import React from 'react';
import { Box, Pagination } from 'grommet';

import FilterProduct from '../../../common/components/FilterProduct';
import Product from '../../../common/components/Product';

import ProductTitleBar from './ProductTitleBar';

const ListProducts = ({ listProducts, titleBar, options }) => {
  const { data, per_page, current_page, total } = listProducts;

  return(
      <Box 
        fill
        gap="medium"
        margin={{ bottom: '7.1em' }}        
      >
        <ProductTitleBar />
        <Box fill direction="row" justify="between">
          <FilterProduct titleBar={titleBar} options={options} />
          <Box 
            fill
            gap='large' 
            direction='row'
            justify='end'    
          >
            {data.map(product => (
              <Product                
                src={product.image.src}
                alt={product.image.alt}
                bestSeller={product.betseller}
                category={product.category}
                description={product.name}
                price={`${product.price} ${product.currency}`}
              />
            ))}
          </Box>
        </Box>
        <Box align="center">
          <Pagination 
            size="large"
            page={current_page} 
            step={per_page} 
            numberItems={total} 
          />
        </Box>
      </Box>
  )};

export default ListProducts;
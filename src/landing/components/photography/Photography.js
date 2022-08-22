import React from 'react';
import { Box } from 'grommet';

import FilterProduct from '../../../common/components/FilterProduct';
import Product from '../../../common/components/Product';

import PhotographyTitleBar from './PhotographyTitleBar';

const Photography = ({ listProduct }) => {
  const { data } = listProduct
  console.log(listProduct)
  return(
      <Box 
        gap="medium"
        margin={{ botomm: '7.1em' }}        
      >
        <PhotographyTitleBar />
        <Box fill direction="row" justify="between">
          <FilterProduct 
            name='Category'
            options={[
              'People',
              'Premium',
              'Pets',
              'Food',
              'LandMarks',
              'Cities',
              'Nature',
            ]}
          />
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
      </Box>
  )};

export default Photography;
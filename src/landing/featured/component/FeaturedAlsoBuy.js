import React from 'react'
import { Box, Text } from 'grommet';

import Product from '../../../common/components/Product';

const FeaturedAlsoBuy = ({ products }) => (
  <Box gap="small" fill='horizontal' align="end">
    <Text margin='none' size='xlarge' weight={700}>
      People also buy
    </Text>
    <Box direction='row' gap="medium">
      {products.map(product => (
        <Product 
          small
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
);
export default FeaturedAlsoBuy;
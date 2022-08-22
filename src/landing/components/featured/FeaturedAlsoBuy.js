import React from 'react'
import { Box, Text } from 'grommet';

import Product from '../../../common/components/Product';

const FeaturedAlsoBuy = () => (
  <Box gap="small" fill='horizontal' align="end">
    <Text margin='none' size='xlarge' weight={700}>
      People also buy
    </Text>
    <Product />
  </Box>
);
export default FeaturedAlsoBuy;
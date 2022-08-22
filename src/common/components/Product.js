import React from 'react';
import { Box, Button, Image, Text } from 'grommet';

const Product = ({ alt, src, category, description, price }) => (
  <Box gap="small">
    <Box>
      <Image alt={alt} src={src} />
      <Button primary label="ADD TO CART" />
    </Box>
  </Box>
);

export default Product;
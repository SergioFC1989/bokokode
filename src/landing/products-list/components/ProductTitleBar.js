import React from 'react';
import { Box, Heading } from 'grommet';
import ProductSort from './ProductSort';

const ProductTitleBar = ({ sort, onClick }) => (
  <Box
    fill
    direction="row"
    justify="between"
    align="start"
  >
    <Box fill direction='row' gap="xsmall" justify='start'>
      <Heading level={2} margin='none' weight={700}>Photography /</Heading>
      <Heading level={2} margin='none' weight={400} color='medium-grey'>Premium Photos</Heading>
    </Box>
    <ProductSort sort={sort} onClick={onClick} />
  </Box>
);

export default ProductTitleBar;
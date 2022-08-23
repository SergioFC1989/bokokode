import React from 'react';
import { Box, Text } from 'grommet';
import ProductSort from './ProductSort';

const ProductTitleBar = ({ sort, onClick }) => (
  <Box
    fill
    direction="row"
    justify="between"
    align="start"
  >
    <Box fill direction='row' gap="xsmall">
      <Text margin="none" size='xxlarge' weight={700}>Photography /</Text>
      <Text margin="none" size='xxlarge' weight={400} color='medium-grey'>Premium Photos</Text>
    </Box>
    <ProductSort sort={sort} onClick={onClick} />
  </Box>
);

export default ProductTitleBar;
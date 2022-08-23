import React from 'react';
import { Box, Text } from 'grommet';

import { CheckBoxGroup } from '../styles/styled-filter-product'

const FilterProduct = ({ titleBar, options }) => {
  return (
    <Box gap='large' width='40.2em'>
      <Text size='xlarge' weight={700}>{titleBar}</Text>
      <CheckBoxGroup gap='medium' options={options} />
    </Box>
  )
};

export default FilterProduct;
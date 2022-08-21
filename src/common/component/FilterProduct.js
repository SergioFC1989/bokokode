import { Box, CheckBoxGroup, Text } from 'grommet';
import React from 'react';

const FilterProduct = ({ title }) => {
  return (
    <Box width='13rem'>
      <Text size='xlarge'>{title}</Text>
      <CheckBoxGroup options={[
        'People',
        'Premium',
        'Pets',
        'Food',
        'LandMarks',
        'Cities',
        'Nature',
      ]} />
    </Box>
  )
};

export default FilterProduct;
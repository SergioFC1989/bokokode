import React from 'react';
import styled from 'styled-components';
import { Box, CheckBoxGroup, Text } from 'grommet';

const StyleCheckBoxGroup = styled(CheckBoxGroup)`
  font-size: 22px;
  color: #1D1D1D;
  font-weight: 400;
`;

const FilterProduct = ({ name }) => {
  return (
    <Box gap='medium' width='18.5em'>
      <Text margin={{vertical: 'medium'}} size='xlarge' weight={700}>{name}</Text>
      <StyleCheckBoxGroup 
        gap='medium'
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
    </Box>
  )
};

export default FilterProduct;
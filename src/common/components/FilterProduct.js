import React from 'react';
import styled from 'styled-components';
import { Box, CheckBoxGroup, Text } from 'grommet';

const StyleCheckBoxGroup = styled(CheckBoxGroup)`
  font-size: 22px;
  color: #1D1D1D;
  font-weight: 400;
`;

const FilterProduct = ({ titleBar, options }) => {
  return (
    <Box gap='medium' width='18.5em'>
      <Text margin={{vertical: 'medium'}} size='xlarge' weight={700}>{titleBar}</Text>
      <StyleCheckBoxGroup gap='medium' options={options} />
    </Box>
  )
};

export default FilterProduct;
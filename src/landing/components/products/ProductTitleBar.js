import React from 'react';
import styled from 'styled-components';
import { Box, Button, Image, Text } from 'grommet';

import Sort from '../../../common/assets/sort.svg';

const StyledButton = styled(Button)`
  width: 17.1em;
  height: 3.1em;
  font-weight: normal;
`

const ProductTitleBar = () => (
  <Box
    direction="row"
    justify="between"
    align="start"
  >
    <Box fill direction='row' gap="xsmall">
      <Text margin="none" size='xxlarge' weight={700}>Photography /</Text>
      <Text margin="none" size='xxlarge' weight={400} color='medium-grey'>Premium Photos</Text>
    </Box>
    <Box fill="horizontal" direction="row" gap="xsmall" align="center" justify="end">
      <Image src={Sort} />
      <Text margin="none" size='xlarge' weight={400} color='medium-grey'>Sort by</Text>
      <Text margin="none" size='xlarge' weight={400}>Price</Text>
      <Button />
    </Box>
  </Box>
);

export default ProductTitleBar;
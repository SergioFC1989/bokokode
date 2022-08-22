import React from 'react';
import styled from 'styled-components';
import { Box, Button, Text } from 'grommet';

const StyledButton = styled(Button)`
  width: 17.1em;
  height: 3.1em;
  font-weight: normal;
`

const FeatureTitleBar = ({ name }) => (
  <Box
    direction="row"
    justify="between"
    align="center"
  >
    <Box fill>
      <Text margin="none" size='xxlarge' weight={700}>{name}</Text>
    </Box>
    <StyledButton
      primary 
      label="ADD TO CART"
    />
  </Box>
);

export default FeatureTitleBar;
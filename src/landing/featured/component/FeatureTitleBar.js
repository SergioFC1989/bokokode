import React from 'react';
import styled from 'styled-components';
import { Box, Button, Heading } from 'grommet';

const StyledButton = styled(Button)`
  width: 17.1em;
  height: 3.1em;
  font-weight: normal;
`

const FeatureTitleBar = ({ name, onClick }) => (
  <Box
    direction="row"
    justify="between"
    align="center"
    gap='medium'
  >
    <Box fill>
      <Heading level={1} weight={700}>{name}</Heading>
    </Box>
    <StyledButton
      primary
      label="ADD TO CART"
      onClick={onClick}
    />
  </Box >
);

export default FeatureTitleBar;
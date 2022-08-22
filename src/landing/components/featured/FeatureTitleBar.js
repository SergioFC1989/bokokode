import React from 'react';
import { Box, Button, Text } from 'grommet';

const FeatureTitleBar = () => (
  <Box
    direction="row"
    justify="between"
    align="center"
  >
    <Box basis="23.13em">
      <Text margin="none" size='xxlarge' weight="bold">
        Samurai King Resting
      </Text>
    </Box>
    <Button
      primary 
      label="ADD TO CART"
    />
  </Box>
);

export default FeatureTitleBar;
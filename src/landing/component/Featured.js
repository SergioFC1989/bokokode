import React from 'react';
import { Box, Button, Text } from 'grommet';

const Featured = () => (
  <>
    <Box fill='horizontal'>
      <Box direction='row'>
        <Box fill='horizontal' align='start'>
          <Text margin='none' size='xlarge' weight='bold'>Samurai King Restings</Text>
        </Box>
        <Box fill='horizontal' align='end'>
          <Button primary label='ADD TO CART' />
        </Box>
      </Box>
    </Box>
  </>
);
export default Featured;

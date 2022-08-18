import React from 'react';
import { Box, Image, Text } from 'grommet';

import Button from '../../common/component/Button';

const Featured = ({ src }) => (
  <>
    <Box fill='horizontal'>
      <Box 
        direction='row' 
        margin={{
          top: 'none',
          bottom: '27px'
        }}
      >
        <Box fill='horizontal' align='start'>
          <Text 
            margin='none' 
            size='xxlarge' 
            weight='bold'
          >
            Samurai King Restings
          </Text>
        </Box>
        <Box fill='horizontal' align='end'>
          <Button primary label='ADD TO CART' />
        </Box>
      </Box>
      <Box fill='horizontal' height='553px' background={{ image: `url(${src})` }} justify='end'>
        <Box width="271.95px" height="67px" background='#FFFFFF' align="center" justify="center">
          <Text margin='none' size='large' weight="700">Photo of the day</Text>
        </Box>
      </Box>
    </Box>
  </>
);
export default Featured;

import React from 'react';
import { Box, Button, Text } from 'grommet';

import TitleBar from './TitleBar'

const Featured = ({ src }) => {
return(
    <>
      <TitleBar />
      
      <Box
        id='box-featured-image'
        fill='horizontal'
        height='553px'
        justify='end'
        background={{
          image: `url(${src})`,
          position: 'center',
          size: 'cover',
        }}
      >
        <Box width="271.95px" height="67px" background='#FFFFFF' align="center" justify="center">
          <Text margin='none' size='large' weight={700}>Photo of the day</Text>
        </Box>
      </Box>
    </>
)};

export default Featured;
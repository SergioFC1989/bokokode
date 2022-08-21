import React from 'react';
import { Box, Button, Text } from 'grommet';

const Featured = ({ product }) => {
  const { title, src } = product;
  // Imagen inline <Fe

  <>
    <Box>
      <h1>{title}</h1>
      <Button />
    </Box>
    {/* <Box
      id='box-featured'
      fill='horizontal'
      margin={{
        top: 'none',
        bottom: '46px'
      }}
    >
      <Box
        id='box-featured-children'
        direction='row'
        margin={{
          top: 'none',
          bottom: '27px'
        }}
      >
        <Box id='box-featured-title' fill='horizontal' align='start'>
          <Text
            margin='none'
            size='xxlarge'
            weight={700}
          >
            Samurai King Restings
          </Text>
        </Box>
        <Box id='box-featured-button-cart' fill='horizontal' align='end'>
          <Button primary label='ADD TO CART' />
        </Box>
      </Box> */}
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
  </Box>
  </>
);
export default Featured;

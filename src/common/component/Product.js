import React from 'react';
import { Box, Image, Text } from 'grommet';

const Product = ({
  alsoBuy,
  src,
  category,
  description,
  price
}) => (
  <>
    {alsoBuy
      ? (
        <Box>
          <Box
            width='117px'
            height='147px'
            margin={{
              top: 'none',
              bottom: '14px',
            }}
          >
            <Image fit='cover' src={src} />
          </Box>
          <Box gap='18px'>
            <Text
              margin='none'
              size='xsmall'
              weight='700'
              color='#656565'
            >
              {category}
            </Text>
            <Text
              margin='none'
              size='regular'
              weight='700'
              color='#000000'
            >
              {description}
            </Text>
            <Text
              margin='none'
              size='small'
              weight='400'
              color='#656565'
            >
              {price}
            </Text>
          </Box>
        </Box>
      )
      : (
        <Box></Box>
      )
    }
  </>
);

export default Product;
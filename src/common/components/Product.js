import React from 'react';
import styled from 'styled-components';
import { Box, Button, Image, Text } from 'grommet';

const StyledButton = styled(Button)`
  font-weight: normal;
  padding: 0px;
`;

const Product = ({ alt, src, bestSeller, category, description, price, small }) => {
  return(
    <Box 
      gap="small"
      width={small ? '7.8em' : '18.8em'}
    >
      <Box>
        {!bestSeller && (
          <Box width="40%" background='red'>
            <Text margin='none' size='xxsmall' weight={400}>Best Seller</Text>
          </Box>
        )}
        <Box height={small ? '9.8em' : '26.6em'}>
          <Image fit='cover' alt={alt} src={src} />
        </Box>
        <StyledButton 
          primary
          label="ADD TO CART" 
          onClick={() => {}}
        />
      </Box>
      <Text 
        margin='none' 
        size={small ? 'xsmall' : 'xlarge'} 
        weight={700}
        color='dark-grey'
      >
        {category}
      </Text>
      <Text 
        margin='none' 
        size={small ? 'regular' : 'giant'} 
        weight={700}
        color='brand'
      >
        {description}
      </Text>
      <Text 
        margin='none' 
        size={small ? 'small' : 'xxlarge'} 
        weight={400}
        color='dark-grey'
      >
        {price}
      </Text>
    </Box>
  )
}

export default Product;
import React from 'react';
import { Box, Image, Text } from 'grommet';
import * as Styled from '../styles/styled-product';

const Product = ({ 
  alt, 
  src, 
  bestSeller, 
  category, 
  description, 
  price, 
  onClick,
  small 
}) => {
  return(
    <Box 
      gap="small"
      width={small ? '7.8em' : '18.8em'}
    >
      <Styled.ImageContainer>
        {bestSeller && (
          <Styled.ImageLabel 
            height="medium" 
            width="40%" 
            background='white' 
          >
            <Text margin='none' textAlign='center' size={small ? 'medium' : 'large'} weight={400}>Best Seller</Text>
          </Styled.ImageLabel>
        )}
        <Box flex={1} height={small ? '9.8em' : '26.6em'}>
          <Image fill fit='cover' alt={alt} src={src} />
        </Box>
        {small 
          ?(
            <Styled.ButtonSmall 
              primary
              label="ADD TO CART" 
              onClick={onClick}
            />
          )
          :(
            <Styled.ButtonRegular 
              primary
              label="ADD TO CART" 
              onClick={onClick}
            />
          )
        }
      </Styled.ImageContainer>
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
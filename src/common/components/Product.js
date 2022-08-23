import React from 'react';
import { Box, Button, Image, Text } from 'grommet';

import * as Styled from '../styles/styled-product';
import useSize from '../../landing/hooks/useSize';

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
  const size = useSize()
  const [W, H] = size !== 'large' ? ['14em', '20em'] : ['18.8em', '26.5em']
  return (
    <Box
      justify='center'
      width={small ? '7.8em' : W}
      gap="small"
    >
      <Styled.BestSellerContainer>
        {bestSeller && !small && (
          <Styled.BestSellerLabel>
            <Text textAlign='center' size={small ? 'medium' : 'large'} weight={400}>Best Seller</Text>
          </Styled.BestSellerLabel>
        )}
        <Box height={small ? '9.8em' : H}>
          <Image fit='cover' alt={alt} src={src} />
        </Box>
        {!small && (
          <Button
            primary
            label="ADD TO CART"
            onClick={onClick}
          />
        )
        }
      </Styled.BestSellerContainer>
      <Text
        size={small ? 'xsmall' : 'xlarge'}
        weight={700}
        color='dark-grey'
      >
        {category}
      </Text>
      <Text
        truncate
        title={description}
        size={small ? 'regular' : 'giant'}
        weight={700}
        color='brand'
      >
        {description}
      </Text>
      <Text
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
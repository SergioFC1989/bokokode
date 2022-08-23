import React from 'react';
import { Box, Pagination } from 'grommet';

import Product from '../../../common/components/Product';

import FilterProduct from '../../../common/components/FilterProduct';
import ProductTitleBar from '../components/ProductTitleBar';

const ProductsList = ({
  listProducts,
  options,
  sort,
  onClick
}) => {

  const {
    data,
    per_page,
    current_page,
    total
  } = listProducts;

  return (
    <Box
      gap="large"
      margin={{ bottom: '7.1em' }}
    >
      <ProductTitleBar sort={sort} onClick={onClick} />
      <Box fill direction="row" justify="between">
        <FilterProduct titleBar='category' options={options} />
        <Box
          fill='horizontal'
          wrap
          gap='large'
          direction='row-reverse'
          justify='start'
        >
          {data.map(product => (
            <Box margin={{ bottom: 'large' }}>
              <Product
                src={product.image.src}
                alt={product.image.alt}
                bestSeller={product.betseller}
                category={product.category}
                description={product.name}
                price={`${product.price} ${product.currency}`}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box align="center">
        <Pagination
          size="large"
          page={current_page}
          step={per_page}
          numberItems={total}
        />
      </Box>
    </Box>
  )
};

export default ProductsList;
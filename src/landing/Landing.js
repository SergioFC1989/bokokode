import React, { useMemo } from 'react';
import { Box, Spinner } from 'grommet';

import Layout from '../common/components/Layout';

import Featured from './featured/view/Featured';
import ProductsList from './products-list/views/ProductsList';

import useProducts from './hooks/useProducts';
import useSort from './hooks/useSort';
import useCartShopping from './hooks/useCartShopping';
import useSize from './hooks/useSize';

const Landing = () => {
  const { isLoading, data } = useProducts()
  const { sort, onChangeSort } = useSort()
  const { cartShopping } = useCartShopping()
  const size = useSize()
  const featuredProduct = useMemo(() => data?.data.find(product => product.featured), [data])


  return (
    <>
      {isLoading
        ? (
          <Layout onClickCartShopping={() => { }} itemsCartShopping={cartShopping} >
            <Box fill align='center' justify='center'>
              <Spinner size='medium' />
            </Box>
          </Layout>
        )
        : (
          <Layout>
            <Featured product={featuredProduct} />
            <ProductsList
              listProducts={data}
              options={[
                'People',
                'Premium',
                'Pets',
                'Food',
                'LandMarks',
                'Cities',
                'Nature',
              ]}
              sort={sort}
              onClick={onChangeSort}
            />
          </Layout>
        )
      }
    </>
  )
};
export default Landing;
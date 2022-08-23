import React, { useMemo } from 'react';
import { Box, Spinner } from 'grommet';

import Layout from '../common/components/Layout';

import Featured from './featured/view/Featured';
import ProductsList from './products-list/views/ProductsList';

import useProducts from './hooks/useProducts';
import useSort from './products-list/hooks/useSort';
import useCartShopping from './hooks/useCartShopping';

const Landing = () => {
  const {isLoading, data} = useProducts()
  const featuredProduct = useMemo(() => data?.data.find(product => product.featured), [data])
  const { sort, onChangeSort } = useSort()
  const { cartShopping, onAddItem, onRemoveItems } = useCartShopping()

  return (
    <>
      {isLoading 
        ?(
          <Layout>
            <Box fill align='center' justify='center'>
              <Spinner size='medium'/> 
            </Box> 
          </Layout>
        )
        :(
          <Layout>
            <Featured product={featuredProduct} />
            <ProductsList 
              titleBar='Category'
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
  )};
export default Landing;
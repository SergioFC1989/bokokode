import React, { useMemo } from 'react';
import { Box, Spinner } from 'grommet';

import Layout from '../common/components/Layout';

import Featured from './components/featured/Featured';
import ListProducts from './components/products/ListProducts';

import useProducts from './hooks/useProducts';

const Landing = () => {
  const {isLoading, data} = useProducts()
  const featuredProduct = useMemo(() => data?.data.find(product => product.featured), [data])

  return (
    <>
      <Layout>
        {isLoading 
          ? (
            <Box fill align='center' justify='center'>
              <Spinner size='medium'/> 
            </Box> 
          )
          : (
            <Box>
              <Featured product={featuredProduct} />
              <ListProducts 
                listProducts={data} 
                titleBar='Category'
                options={[
                'People',
                  'Premium',
                  'Pets',
                  'Food',
                  'LandMarks',
                  'Cities',
                  'Nature',
                ]}
              />
            </Box>
          )
        }
      </Layout>
    </>
  );
};
export default Landing;
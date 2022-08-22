import React, { useMemo } from 'react';
import { Box, Spinner } from 'grommet';

import Layout from '../common/components/Layout';
import FilterProduct from '../common/components/FilterProduct';
import Featured from './components/featured/Featured';

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
            <>
              <Featured product={featuredProduct} />
              {/* <FilterProduct /> */}
            </>
          )
        }
      </Layout>
    </>
  );
};

export default Landing;
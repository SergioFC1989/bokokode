import React, { useMemo } from 'react';
import { Box, Pagination, Spinner } from 'grommet';

import Layout from '../common/components/Layout';

import Featured from './components/featured/Featured';
import Photography from './components/photography/Photography';

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
              <Photography listProduct={data} />
              <Pagination numberItems={237} />
            </Box>
          )
        }
      </Layout>
    </>
  );
};

export default Landing;
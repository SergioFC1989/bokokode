import React, { useEffect, useState } from 'react';

import Featured from './component/Featured';
import Information from './component/Information';
import Layout from '../common/component/Layout';

import useProducts from './hooks/useProducts';
import FilterProduct from '../common/component/FilterProduct';

const Landing = () => {
  // const { data, error, loading } = useProducts('1')
  const data = {};
  const [photoDay, setPhotoDay] = useState()
  const [productAlsoBuy, setProductAlsoBuy] = useState()

  const featuredProduct = data.products.find(product => product.featured)
  return (
    <>
      <Layout>
        <Featured product={featuredProduct} />
        <Information data={productAlsoBuy} />
        <FilterProduct />
      </Layout>
    </>
  );
};

export default Landing;
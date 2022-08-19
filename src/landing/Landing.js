import React, { useEffect, useState } from 'react';

import Featured from './component/Featured';
import Information from './component/Information';
import Layout from '../common/component/Layout';

import useFetch from '../api/useFetch';

const Landing = () => {
  const { data, error, loading } = useFetch(
    'https://technical-frontend-api.bokokode.com/api/products?page=1',
    { method: 'POST' }
  )
  const [photoDay, setPhotoDay] = useState()
  const [productAlsoBuy, setProductAlsoBuy] = useState()

  useEffect(() => {
    data.length > 0 && (() => {
      console.log(data)
      //Search photo of the day for prop featured === true
      const foundImageFeatured = data.map(elem => elem.data.find(elem => elem.featured === true))
      foundImageFeatured !== undefined && (() => {
        const selectedImageFeatured = foundImageFeatured.map(elem => elem.image.src)
        setPhotoDay(selectedImageFeatured)
      })()
      //Search products that people also buy
      const foundProductsAlsoBuy = data.map(elem => elem.data.find(elem => elem.people_also_buy.length > 0))
      foundProductsAlsoBuy !== undefined && (() => {
        const selectedProductsAlsoBuy = foundProductsAlsoBuy.flatMap(elem => elem.people_also_buy)
        setProductAlsoBuy(selectedProductsAlsoBuy)
      })()
    })()
  }, [data])

  return (
    <>
      <Layout>
        <Featured src={photoDay} />
        <Information data={productAlsoBuy} />
      </Layout>
    </>
  );
};

export default Landing;
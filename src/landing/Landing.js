import React, { useEffect, useState } from 'react';

import Featured from './component/Featured';
import Header from './component/Header';
import Layout from '../common/component/Layout';
import useFetch from '../api/useFetch';

const Landing = () => {
  const { data, error, loading } = useFetch('https://technical-frontend-api.bokokode.com/api/products?page=1', { method: 'POST' });
  const [photoDay, setPhotoDay] = useState()
  
  useEffect(() => {
    data.length > 0 && (() => {
      const firstImage = data.map(elem => elem.data[0].image.src)
      setPhotoDay(firstImage)
    })()
  },[data])
  

  return (
    <>
      <Layout>
        <Header />
        <Featured src={photoDay} />
      </Layout>
    </>
  );
};

export default Landing;
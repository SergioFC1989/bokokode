import React from 'react';

import Featured from './component/Featured';
import Header from './component/Header';
import Layout from '../common/component/Layout';

const Landing = () => {
  return (
    <>
      <Layout>
        <Header />
        <Featured />
      </Layout>
    </>
  );
};

export default Landing;
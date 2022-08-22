import React from 'react';
import PropTypes from 'prop-types';
import { Main } from 'grommet';

import Header from '../../landing/components/Header';

const Layout = ({ children }) => {
  return (
    <Main
      gap='4em'
      margin={{
        horizontal: 'large',
      }}
    >
      <Header />
      
      {children}
    </Main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
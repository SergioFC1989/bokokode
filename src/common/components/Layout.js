import React from 'react';
import PropTypes from 'prop-types';
import { Main } from 'grommet';

import Header from './Header';

const Layout = ({ children }) => {
  return (
    <Main
      gap='4.3em'
      margin={{
        horizontal: 'large',
      }}
    >
      <Header />
      {children}
    </Main>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
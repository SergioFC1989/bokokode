import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

import Header from '../../landing/component/Header';

const Layout = ({ children }) => {
  return (
    <Box
      margin={{
        horizontal: '5rem',
      }}
    >
      <Header />
      {children}
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
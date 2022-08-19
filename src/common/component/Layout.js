import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

import Header from '../../landing/component/Header';

const Layout = ({ children }) => {
  return (
    <Box
      margin={{
        left: '82px',
        right: '68px',
        // top: '37px',
        // bottom: '61px',
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
import React from 'react';
import PropTypes from 'prop-types';
import { Main } from 'grommet';

import Header from './Header';

const Layout = ({ children, onClickCartShopping, itemsCartShopping }) => {
  return (
    <Main
      gap='4.3em'
      margin={{
        horizontal: 'large',
      }}
    >
    {console.log(itemsCartShopping)}
      <Header onClick={onClickCartShopping} items={itemsCartShopping} />
      {children}
    </Main>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
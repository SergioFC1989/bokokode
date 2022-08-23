import React from 'react';
import { Header as GHeader, Box, Button, Image } from 'grommet';

import Title from '../../common/assets/title.svg';
import CartShopping from '../../common/assets/shopping-cart.svg';

const Header = () => (
  <GHeader
    height='8.2em'
    border={{
      side: 'bottom',
      size: 'medium',
      color: 'light-grey'
    }}
  >
    <Box basis='8em'>
      <Image
        fit="contain"
        src={Title}
      />
    </Box>
    <Box basis='3.6em'>
      <Button>
        <Image
          fit="contain"
          src={CartShopping}
        />
      </Button>
    </Box>
  </GHeader>
);

export default Header; 
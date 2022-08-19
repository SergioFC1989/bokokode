import React from 'react';
import { Box, Image } from 'grommet';

import Title from '../../common/assets/title.svg';
import CartShopping from '../../common/assets/shopping-cart.svg';

const Header = ({ onClick }) => (
  <>
    <Box
      id='box-header'
      fill='horizontal'
      direction='row'
      justify='start'
      margin={{
        top: 'none',
        bottom: '58px',
      }}
      border={{
        side: 'bottom',
        size: '4px',
        color: '#E4E4E4'
      }}
      pad={{
        top: 'none',
        bottom: '33px'
      }}
    >
      <Box
        id='box-header-children'
        fill='horizontal'
        align='start'
      >
        <Box
          id='box-header-title'
          height='19.67px'
          width='124px'
          align='start'
          margin={{
            top: '24px',
            bottom: 'none'
          }}
        >
          <Image
            fit="cover"
            src={Title}
          />
        </Box>
      </Box>
      <Box
        id='box-header-icon-cart'
        fill='horizontal'
        align='end'
      >
        <Box height='54px' width='54px' >
          <Image
            fit="cover"
            src={CartShopping}
            onClick={onClick}
          />
        </Box>
      </Box>
    </Box>
  </>
);

export default Header; 
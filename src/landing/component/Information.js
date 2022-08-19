import React from 'react';
import { Box, Text } from 'grommet';

import Product from '../../common/component/Product';

const Information = ({ data }) => (
  <>
  <Box
    width='117px'
    height='147px'
    margin={{
      top: 'none',
      bottom: '14px',
    }}
  >

  </Box>
    <Box
      id='box-information'
      justify='start'
      margin={{
        top: 'none',
        bottom: '68px',
      }}
      border={{
        side: 'bottom',
        size: '4px',
        color: '#E4E4E4'
      }}
      pad={{
        top: 'none',
        bottom: '42px'
      }}
    >
      <Box
        id='box-information-children'
        fill='horizontal'
        margin={{
          top: 'none',
          bottom: '42px'
        }}
      >
        <Box
          direction='row'
          margin={{
            top: 'none',
            bottom: '27px'
          }}
        >
          <Box
            id='box-information-about'
            fill='horizontal'
            align='start'
          >
            <Box
              width='690px'
              height='299px'
              gap='9px'
            >
              <Text
                margin='none'
                size='xlarge'
                weight={700}
              >
                About the Samurai King Resting
              </Text>
              <Text
                margin={{
                  top: '9px',
                  bottom: '12px'
                }}
                size='xlarge'
                weight={700}
                color='#656565'
              >
                Pets
              </Text>
              <Text
                margin='none'
                size='medium'
                weight={400}
                color='#656565'
              >
                So how did the classical Latin become so incoherent? According to McClintock,
                a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to
                provide placeholder text to mockup various fonts for a type specimen book.So how did
                the classical Latin become so incoherent? According to McClintock, a 15th century typesetter
                likely scrambled part of Cicero's De Finibus in order to provide placeholder
                text to mockup various fonts for a type specimen book.So how did the classical
                Latin become so incoherent? According to McClintock.
              </Text>
            </Box>
          </Box>
          <Box
            id='box-information-also-buy'
            fill='horizontal'
            align='end'
          >
            <Box
              width='284px'
              height='31px'
              gap='9px'
            >
              <Text
                textAlign='end'
                margin='none'
                size='xlarge'
                weight={700}
              >
                People also buy
              </Text>
              <Box 
                id='box-information-products-also-buy'
                direction='row' 
                gap='30px'
              >
                {data !== undefined && data.map(elem => (
                  <Product alsoBuy
                    src={elem.image.src}
                    category={elem.category}
                    description='Egg Ballon'
                    price={elem.price}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </>
);

export default Information;
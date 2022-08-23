import React from 'react';
import { Box } from 'grommet';

import FeatureTitleBar from '../component/FeatureTitleBar'
import FeaturedImage from '../component/FeaturedImage';
import FeaturedDescription from '../component/FeaturedDescription';
import FeaturedAlsoBuy from '../component/FeaturedAlsoBuy';

const Featured = ({ product, onClick }) => {
  const { 
    name, 
    category, 
    description, 
    image, 
    people_also_buy 
  } = product

  return(
      <Box 
        pad={{ bottom: '4.4em', top: 'none'}}
        gap="medium"
        border={{
          side: 'bottom',
          size: 'medium',
          color: 'light-grey'
        }}
      >
        <FeatureTitleBar name={name} onClick={onClick} />
        <FeaturedImage alt={image.alt} src={image.src} />
        <Box direction="row" justify="between">
          <FeaturedDescription 
            name={name}
            category={category}
            description={description}
          />
          <FeaturedAlsoBuy products={people_also_buy} />
        </Box>
      </Box>
  )};

export default Featured;
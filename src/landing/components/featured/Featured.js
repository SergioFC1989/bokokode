import React from 'react';
import { Box } from 'grommet';

import FeatureTitleBar from './FeatureTitleBar'
import FeaturedImage from './FeaturedImage';
import FeaturedDescription from './FeaturedDescription';
import FeaturedAlsoBuy from './FeaturedAlsoBuy';

const Featured = ({ product }) => {
  const { name, category, description, image, people_also_buy } = product

  return(
      <Box 
        gap="medium"
        border={{
          side: 'bottom',
          size: 'medium',
          color: 'light-grey'
        }}
      >
        <FeatureTitleBar name={name} />
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
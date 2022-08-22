import React from 'react';
import { Box } from 'grommet';

import FeatureTitleBar from './FeatureTitleBar'
import FeaturedImage from './FeaturedImage';
import FeaturedAbout from './FeaturedAbout';
import FeaturedAlsoBuy from './FeaturedAlsoBuy';

const Featured = ({ product }) => {
  const { image } = product
  return(
      <Box gap='medium'>
        <FeatureTitleBar />
        <FeaturedImage alt={image.alt} src={image.src} />
        <Box 
          direction="row"
          justify="between"
          align="start"
        >
          <FeaturedAbout />
          <FeaturedAlsoBuy />
        </Box>
      </Box>
  )};

export default Featured;
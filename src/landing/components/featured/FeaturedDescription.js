import React from 'react';
import { Box, Text } from 'grommet';

const FeaturedDescription = ({ name, category, description }) => (
  <Box gap="small" fill='horizontal'>
    <Text margin='none' size='xlarge' weight={700}>About {name}</Text>
    <Text margin='none' size='xlarge' weight={700} color='dark-grey'>{category}</Text>
    <Text margin='none' size='medium' weight={400} color='dark-grey'>{description}</Text>
  </Box>
);
export default FeaturedDescription;
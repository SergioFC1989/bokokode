import React from 'react';
import { Box, Text } from 'grommet';

const FeaturedDescription = ({ name, category, description }) => (
  <Box gap="small" width="50%" height="20em">
    <Text margin='none' size='xlarge' weight={700}>About {name}</Text>
    <Text margin='none' size='xlarge' weight={700} color='dark-grey'>{category}</Text>
    <Text margin='none' size='medium' weight={400} color='dark-grey'>{description}</Text>
  </Box>
);
export default FeaturedDescription;
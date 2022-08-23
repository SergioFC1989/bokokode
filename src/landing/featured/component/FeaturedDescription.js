import React from 'react';
import { Box, Heading, Text } from 'grommet';

const FeaturedDescription = ({ name, category, description }) => (
  <Box gap="small" width="50%" margin='none' size='small' height="20em">
    <Heading level={2} weight={700} margin='none'>About {name}</Heading>
    <Text margin='none' size='xlarge' weight={700} color='dark-grey'>{category}</Text>
    <Text margin='none' size='medium' weight={400} color='dark-grey'>{description}</Text>
  </Box>
);
export default FeaturedDescription;
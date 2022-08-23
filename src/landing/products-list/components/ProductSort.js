import React from 'react';
import { Box, Button, Image, Text } from 'grommet';
import { FormDown, FormUp} from 'grommet-icons';

import Sort from '../../../common/assets/sort.svg';

const ProductSort = ({ sort, onClick }) => (
  <Box fill="horizontal" direction="row" gap="xsmall" align="center" justify="end">
    <Image src={Sort} />
    <Text margin="none" size='xlarge' weight={400} color='medium-grey'>Sort by</Text>
    <Text margin="none" size='xlarge' weight={400}>Price</Text>
    <Button 
      icon={sort === 'DESC' ? <FormDown /> : <FormUp />} 
      onClick={onClick} 
    />
  </Box>
);
export default ProductSort
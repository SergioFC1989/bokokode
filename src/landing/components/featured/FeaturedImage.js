import { Box, Image, Text } from "grommet";
import styled from "styled-components";

const ImageContainer = styled(Box)`
  position: relative;
`;

const ImageLabel = styled(Box)`
  position: relative;
  top: -4.4em;
`;

const FeaturedImage = ({ alt, src }) => (
  <ImageContainer>
    <Image fit="contain" alt={alt} src={src} />
    <ImageLabel height="4.4em" width="18.13em" background='white' align="center" justify="center">
      <Text margin='none' size='large' weight={700}>Photo of the day</Text>
    </ImageLabel>
  </ImageContainer>
);

export default FeaturedImage;
import { Image, Text } from "grommet";
import { ImageContainer, ImageLabel } from '../style/style-featured-image';

const FeaturedImage = ({ alt, src }) => (
  <ImageContainer>
    <Image fit="cover" alt={alt} src={src} />
    <ImageLabel>
      <Text margin='none' size='large' weight={700}>Photo of the day</Text>
    </ImageLabel>
  </ImageContainer>
);

export default FeaturedImage;
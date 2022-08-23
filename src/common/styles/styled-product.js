import { Box, Button } from "grommet";
import styled from "styled-components";

export const ButtonRegular = styled(Button)`
  font-weight: normal;
  padding: 0px;
`;

export const ButtonSmall = styled(Button)`
  font-weight: normal;
  padding: 0;
  height: 1.8em;
  width: 7.8em;
`;

export const ImageContainer = styled(Box)`
  position: relative;
`;

export const ImageLabel = styled(Box)`
  position: relative;
  top: +2em;
`;
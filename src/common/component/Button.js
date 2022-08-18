import React from 'react';
import { Box, Button as ButtomGrommet } from 'grommet';

const Button = ({ ...props }) => (
  <>
    {props.primary 
      ?(
        <Box width='257px' align="center">
          <ButtomGrommet
            fill='horizontal'
            {...props}
          />
        </Box>
      )
      :(
        <Box width='392px' align="center">
          <ButtomGrommet
            fill="horizontal"
            {...props}
          />
        </Box>
      )
    }
  </>
);

export default Button;
import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

const CustomTheme = deepMerge(grommet, {
  global: {
    colors: {
      'dark-grey': '#656565',
      'medium-grey': '#9B9B9B',
      'light-grey': '#E4E4E4',
    },
    breakpoints: {
      small: {
        value: 768,
        // edgeSize: {
        //   none: '0px',
        //   hair: '1px',
        //   xxsmall: '2px',
        //   xsmall: '3px',
        //   small: '6px',
        //   medium: '12px',
        //   large: '24px',
        //   xlarge: '58px'
        // }
      },
    },
    focus: {
      border: {
        color: 'transparent',
      },
      outline: {
        color: 'transparent',
      },
    },
    font: {
      family: 'Archivo',
      size: '15px',
      weight: 'normal',
      face: `
        /* vietnamese */
        @font-face {
          font-family: 'Archivo';
          font-style: normal;
          font-weight: 400;
          font-stretch: 100%;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/archivo/v18/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTNDNZ-BdpF0s.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Archivo';
          font-style: normal;
          font-weight: 400;
          font-stretch: 100%;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/archivo/v18/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTNDNZ-RdpF0s.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Archivo';
          font-style: normal;
          font-weight: 400;
          font-stretch: 100%;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/archivo/v18/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTNDNZ9xdp.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `,
    },
  },
  text: {
    margin: 0,
    xsmall: {
      size: '13px',
      height: '14.14px'
    },
    small: {
      size: '15px',
      height: '16.32px'
    },
    regular: {
      size: '16x',
      height: '17.41px',
    },
    medium: {
      size: '18x',
      height: '27px',
    },
    large: {
      size: '20px',
      height: '21.76px',
    },
    xlarge: {
      size: '22px',
      height: '23.94px',
    },
    xxlarge: {
      size: '32px',
      height: '34.82px',
    }
  },
  button: {
    border: {
      radius: '0',
    },
    primary: {
      opacity: 0,
      color: '#FFFFFF',
      background: {
        color: '#000000'
      },
      border: {
        color: '#000000',
        round: 'none',
      },
      font: {
        weight: '500',
      },
      padding: {
        vertical: '0.813rem',
        horizontal: '2.438rem',
      },
      extend: `
        width: 16.063rem;
        height: 2.938rem;
      `
    },
    secondary: {
      opacity: 0,
      color: '#000000',
      background: {
        color: '#FFFFFF'
      },
      border: {
        color: '#000000',
        width: '3px',
        round: 'none',
      },
      font: {
        weight: '500',
      },
      padding: {
        vertical: '15px'
      },
      extend: `
        width: 24.5rem;
        height: 3.438rem;
      `
    },
    default: {
      background: 'transparent',
      color: 'black',
    },
  },
});

export default CustomTheme;
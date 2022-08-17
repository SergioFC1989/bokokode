import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

const CustomTheme = deepMerge(grommet, {
  global: {
    active: {
      background: {
        opacity: "none",
      },
      padding: 0,
    },
    colors: {
      background: 'white',
      brand: '#5B83E6',
      text: '#56536A',
      border: 'light-5',
      placeholder: 'light-4',
      'status-error': '#e36262',
      'status-warning': '#FBBD51',
      'brand-contrast': '#F2B044',
    },
    breakpoints: {
      small: {
        value: 768,
        edgeSize: {
          xsmall: '6px',
          small: '12px',
          medium: '16px',
          large: '22px',
        },
      },
    },
    control: {
      border: {
        radius: '6px',
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
      family: 'Mitr',
      size: '14px',
      face: `
        /* thai */
        @font-face {
          font-family: 'Mitr';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8ZcaJIPecmNE.woff2) format('woff2');
          unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Mitr';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8ZcaJJjecmNE.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Mitr';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8ZcaJJnecmNE.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Mitr';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8ZcaJJfecg.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `,
    },
  },
  icon: {
    size: {
      small: '14px',
      medium: '22px',
      large: '28px',
      xlarge: '94px',
    },
  },
  text: {
    small: {
      size: '12px',
    },
    medium: {
      size: '14x',
    },
    large: {
      size: '16px',
    },
    xlarge: {
      size: '20px',
    },
  },
  avatar: {
    size: {
      small: '50px',
      medium: '96px',
      large: '116px',
      xlarge: '156px',
    },
  },
  button: {
    color: "white",
    primary: {
      border: {
        radius: '20px',
      },
      padding: '10px',
      background: { color: 'brand' },
      color: 'white',
      opacity: 0,
    },
    secondary: {
      border: {
        radius: '20px',
      },
      opacity: 0,
      background: '#F07F7F',
      color: 'white',
      padding: '10px',
    },
    default: {
      border: {
        radius: '20px',
      },
      background: 'transparent',
      color: 'black',
      padding: '10px',
    },
  },
  dataTable: {
    container: {
      gap: 'xsmall',
    },
    header: {
      color: 'brand',
      gap: 'xsmall',
      font: {
        size: '12px'
      }
    }
  },
  fileInput: {
    border: 'bottom',
    pad: 'xxsmall',
  },
  radioButton: {
    hover: {
      border: {
        color: 'transparent',
      },
    },
  },
  list: {
    container: {
      align: 'center',
    },
    item: {
      extend: {
        alignText: 'center',
      },
      pad: {
        horizontal: 'none',
        vertical: 'none'
      }
    }
  },
  notification: {
    toast: {
      time: 3000,
    }
  },
  select: {
    control: {
      extend: 'width: 100%'
    },
  },
});

export default CustomTheme;

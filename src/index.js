import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Grommet } from 'grommet';

import styled from 'styled-components';
import reportWebVitals from './reportWebVitals';

import App from './App';
import CustomTheme from './custom-theme'

const container = document.getElementById('root');
const root = createRoot(container);
const StyledGrommet = styled(Grommet)`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  margin: 0;
  padding: 0;
  background: #FFFFFF;
`;

root.render(
  <React.StrictMode>
    <StyledGrommet theme={CustomTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyledGrommet>
  </React.StrictMode>,
);
reportWebVitals();
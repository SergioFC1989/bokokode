import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Grommet } from 'grommet';
import styled from 'styled-components';
import reportWebVitals from './reportWebVitals';
import App from './App';
import theme from './theme'

const container = document.getElementById('root');
const root = createRoot(container);
const StyledGrommet = styled(Grommet)`
  min-height: 100vh;
  min-width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin: 0;
  padding: 0;
  background: #FFFFFF;
  overflow: hidden;
  border-radius: 5px;
`;

root.render(
  <React.StrictMode>
    <StyledGrommet theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyledGrommet>
  </React.StrictMode>, 
);
reportWebVitals();
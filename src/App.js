//import/no-anonymous-default-export
import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Grommet } from 'grommet';
import { QueryClientProvider, QueryClient } from 'react-query'; 

import CustomTheme from './custom-theme'
import routesPath from './routes';
import GlobalStyle from './common/components/GlobalStyles';

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <Grommet theme={CustomTheme}>
      <BrowserRouter>
        <Switch>
          {routesPath.map(({ path, ...props }) =>
            <Route key={path} path={path} {...props} />
          )}
        </Switch>
      </BrowserRouter>
    </Grommet>
  </QueryClientProvider>
);

export default App;
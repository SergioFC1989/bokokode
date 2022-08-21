//import/no-anonymous-default-export
import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Grommet } from 'grommet';

import CustomTheme from './custom-theme'
import routesPath from './routes';
import GlobalStyle from './common/component/GlobalStyles';

const App = () => (
  <>
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
  </>
);


export default App;

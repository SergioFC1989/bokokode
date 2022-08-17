//import/no-anonymous-default-export
import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import routesPath from './routes';

const App = () => (
  <Switch>
    {routesPath.map(({ path, ...props })=> 
      <Route key={path} path={path} {...props} />
    )}
  </Switch>
);


export default App;

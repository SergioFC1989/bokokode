//import/no-anonymous-default-export
import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import routesPath from './routes';

const App = () => (
  <RecoilRoot>
    <Switch>
      {routesPath.map(({ path, ...props })=> 
        <Route key={path} path={path} {...props} />
      )}
    </Switch>
  </RecoilRoot>
);


export default App;

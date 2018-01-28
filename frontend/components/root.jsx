import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';

import HomePage from './homepage';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={HomePage}/>
    </HashRouter>
  </Provider>
);

export default Root;

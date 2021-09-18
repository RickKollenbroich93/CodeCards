import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Collections from './pages/Collections/Collections';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/collections">
          <Collections />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

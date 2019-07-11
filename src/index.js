import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import FullCatalogPage from './components/FullCatalogPage';


ReactDOM.render((
  <BrowserRouter>
    <App>
      <Route path="/theme/:link" component={FullCatalogPage} />
      <Route path="/language/:linkLang" component={ FullCatalogPage } />
      <Route exact path="/" render={() => (
        <Redirect to="/theme/all" />
      )} />
      <Route path="*/linkPlug" render={() => (
        <Redirect to="/theme/all" />
      )} />

    </App>
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import FullCatalogPage from './components/FullCatalogPage';
import AdminPanel from './components/Admin/AdminPanel';
import AdminCareer from './components/Admin/CareerTable/AdminCareer';
import AdminSkill from './components/Admin/SkillTable/AdminSkill';
import AdminAllCourses from './components/Admin/AllCoursesTable/AdminAllCourses';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path="/admin">
        <AdminPanel>
          <Route path="/admin/career" component={AdminCareer} />
          <Route path="/admin/skill" component={AdminSkill} />
          <Route path="/admin/allcourses" component={AdminAllCourses} />
        </AdminPanel>
      </Route>
      <Route path="/">
        <App>
          <Route path="/theme/:link" component={FullCatalogPage} />
          <Route path="/language/:linkLang" component={FullCatalogPage} />
          <Route exact path="/" render={() => (
            <Redirect to="/theme/all" />
          )} />
          <Route path="*/linkPlug" render={() => (
            <Redirect to="/theme/all" />
          )} />
        </App>
      </Route>
    </Switch>

  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

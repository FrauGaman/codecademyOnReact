import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

import FullCatalogPage from './components/Front/FullCatalogPage';
import AdminPanel from './components/Admin/AdminPanel';
import AdminCareer from './components/Admin/CareerBlock/AdminCareer';
import AdminSkill from './components/Admin/SkillBlock/AdminSkill';
import AdminAllCourses from './components/Admin/AllCoursesBlock/AdminAllCourses';
import AdminTheme from './components/Admin/ThemeBlock/AdminTheme';
import AdminLanguage from './components/Admin/LanguageBlock/AdminLanguage';
import AdminKnowledge from './components/Admin/KnowledgeBlock/AdminKnowledge';
import NotFound from './components/Admin/404Admin';
import NotFoundFront from './components/Front/404Front';
import LoginPage from './components/Authorization/LoginPage';
import SignUpPage from './components/Authorization/SignupPage';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" render={(props) => <LoginPage {...props} title={'Log in'} />} />
        <Route path="/signup" render={(props) => <SignUpPage {...props} title={'Sign up'} />} />
        <Route path="/admin">
          <AdminPanel>
            <Switch>
              <Route path="/admin/career" component={AdminCareer} />
              <Route path="/admin/skill" component={AdminSkill} />
              <Route path="/admin/allcourses" component={AdminAllCourses} />
              <Route path="/admin/subject" component={AdminTheme} />
              <Route path="/admin/language" component={AdminLanguage} />
              <Route path="/admin/knowledge" component={AdminKnowledge} />
              <Route exact path="/admin" render={() => (
                <Redirect to="/admin/career" />
              )} />
              <Route path="*/linkPlug" render={() => (
                <Redirect to="/admin/career" />
              )} />
              <Route component={NotFound} />
            </Switch>
          </AdminPanel>
        </Route>
        <Route path="/">
          <App>
            <Switch>
              <Route exact path="/theme/:link" component={FullCatalogPage} />
              <Route exact path="/language/:linkLang" component={FullCatalogPage} />
              <Route exact path="/" render={() => (
                <Redirect to="/theme/all" />
              )} />
              <Route path="*/linkPlug" render={() => (
                <Redirect to="/theme/all" />
              )} />
              <Route component={NotFoundFront} />
            </Switch>
          </App>
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>

), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

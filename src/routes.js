import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

export default (
  <Route path="/" component={App}>

    <IndexRoute
      getComponent={(location, callback) => {
        require.ensure([], function (require) {
          callback(null, require('./pages/HomePage.js').default);
        });
      }}
    />

    <Route
      path="/about"
      getComponent={(location, callback) => {
        require.ensure([], function (require) {
          callback(null, require('./pages/AboutPage.js').default);
        });
      }}
    />

    <Route
      path="/blog"
      getComponent={(location, callback) => {
        require.ensure([], function (require) {
          callback(null, require('./pages/BlogPage.js').default);
        });
      }}
    />

    <Route
      path="/contact"
      getComponent={(location, callback) => {
        require.ensure([], function (require) {
          callback(null, require('./pages/ContactPage.js').default);
        });
      }}
    />
  </Route>
);

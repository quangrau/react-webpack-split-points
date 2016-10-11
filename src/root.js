import 'bootstrap/dist/css/bootstrap.min.css';
import React, { PropTypes, Component } from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

class Root extends Component {

  render() {
    return (
      <div>
        <Router
          history={browserHistory}
          routes={routes}
        />
      </div>
    )
  }
}

Root.propTypes = {

};

export default Root;

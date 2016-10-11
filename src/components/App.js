import styles from './App.scss';
import React, { PropTypes, Component } from 'react';
import Header from '../components/Header';

class App extends Component {

  render() {
    return (
      <div className={styles.root}>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {

};

export default App;

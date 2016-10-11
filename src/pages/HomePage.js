import React, { PropTypes, Component } from 'react';

class HomePage extends Component {

  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span>module</span> local styles.</p>
        <p>Global bootstrap css import works too as you can see on the following button.</p>
        <p><a className="btn btn-outline-primary btn-lg">Enjoy!</a></p>
      </div>
    )
  }
}

HomePage.propTypes = {

};

export default HomePage;

import React, { PropTypes, Component } from 'react';

class ContactPage extends Component {

  componentDidMount() {
    console.log("contact did mount");
  }

  render() {
    return (
      <div>ContactPage</div>
    )
  }
}

ContactPage.propTypes = {

};

export default ContactPage;

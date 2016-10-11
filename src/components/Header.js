import styles from './Header.scss';
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

  render() {
    return (
      <nav className={`navbar navbar-dark ${styles.root}`}>
        <button className="navbar-toggler hidden-sm-up" type="button">
          &#9776;
        </button>
        <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
          <a className="navbar-brand" href="#">Navbar</a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

Header.propTypes = {

};

export default Header;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { TweenLite } from 'gsap';

import Logo from './icons/logo';
import profile from '../images/headshot.png';
import About from '../components/about';

class Header extends Component {
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    TweenLite.fromTo(node, '.350',
      { delay: '.3', opacity: 0, marginBottom: '-25px', ease: Power1.easeInOut },
      { opacity: 1, marginBottom: '0', ease: Power1.easeInOut },
    );
  }

  render() {
    return (
      <header>
        <div className="grid">
          <div className="profile">
            <img className="img-profile" src={profile} alt={name} width="300px" height="300px" />
            <Logo width="250px" />
          </div>
          <About />
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  name: 'Default Name'
};

Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default Header;

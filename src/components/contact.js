import React from 'react';
import PropTypes from 'prop-types';
import Github from './icons/github';
import LinkedIn from './icons/linkedin';
import Twitter from './icons/twitter';

const Contact = ({ title }) => (
  <section className="contact row-padding">
    <div className="container">
      <div className="row">
        <h2 className="text-center">{title}</h2>
        <div className="row row-flex">
          <Github color="#3D3A3B" height="65px" width="65px" link="rskwiat" />
          <LinkedIn color="#3D3A3B" height="65px" width="65px" link="robertskwiat" />
          <Twitter color="#3D3A3B" height="65px" width="65px" link="robertskwiat" />
        </div>
      </div>
    </div>
  </section>
);

Contact.defaultProps = {
  title: 'contact'
};

Contact.propTypes = {
  title: PropTypes.string.isRequired
};

export default Contact;

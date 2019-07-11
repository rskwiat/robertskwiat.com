import React from 'react';
import PropTypes from 'prop-types';
import styles from 'scss/contact.module.scss';

const Contact = ({ title }) => (
  <section className={styles.contact}>
    <div className="container">
      <h2>{title}</h2>
    </div>
  </section>
);

Contact.propTypes = {
  title: PropTypes.string
};

export default Contact;

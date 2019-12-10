import React from 'react';
import PropTypes from 'prop-types';
import { SVG } from 'components/icons';

import styles from 'scss/contact.module.scss';
import icons from 'constants/icons';

const Contact = ({ title }) => (
  <section className={styles.contact}>
    <div className="container">
      <h2>{title}</h2>
      <div className={styles.social}>
        {icons.map((icon, i) => {
          return <SVG icon={icon.icon} link={icon.link} title={icon.title} />;
        })}
      </div>
    </div>
  </section>
);

Contact.propTypes = {
  title: PropTypes.string,
};

export default Contact;

import React from 'react';
import PropTypes from 'prop-types';
import styles from 'scss/contact.module.scss';
import { Github, LinkedIn, Email } from 'components/icons';

import icons from 'constants/icons';

const Contact = ({ title }) => (
  <section className={styles.contact}>
    <div className="container">
      <h2>{title}</h2>
      <div className={styles.social}>
        {icons.map((icon, i) => {
          switch (icon.title) {
            case 'Github':
              return (
                <Github key={i} height="75px" width="75px" link={icon.link} />
              );
            case 'LinkedIn':
              return (
                <LinkedIn key={i} height="75px" width="75px" link={icon.link} />
              );
            case 'Email':
              return (
                <Email key={i} height="75px" width="75px" link={icon.link} />
              );
            default:
              return <div />;
          }
        })}
      </div>
    </div>
  </section>
);

Contact.propTypes = {
  title: PropTypes.string
};

export default Contact;

import React from 'react';
import PropTypes from 'prop-types';
import styles from 'scss/contact.module.scss';
import { Github, LinkedIn, Email } from 'components/icons';

const items = [
  {
    'title': 'Github',
    'link': 'https://github.com/rskwiat'
  },
  {
    'title': 'LinkedIn',
    'link': 'https://linkedin.com/in/robertskwiat'
  },
  {
    'title': 'Email',
    'link': 'mailto:rob@robertskwiat.com'
  }
];

const Contact = ({ title }) => (
  <section className={styles.contact}>
    <div className="container">
      <h2>{title}</h2>
      <div className={styles.social}>
        {items.map((item, i) => {
          switch(item.title) {
            case 'Github':
              return <Github key={i} height="75px" width="75px" link={item.link} />
            case 'LinkedIn':
              return <LinkedIn key={i} height="75px" width="75px" link={item.link} />
            case 'Email':
              return <Email key={i} height="75px" width="75px" link={item.link} />
            default:
              return <div />
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

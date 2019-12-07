import React from 'react';

import { Logo } from 'components/icons';
import about from 'constants/about';

import profileIMG from 'images/headshot.png';
import styles from 'scss/home.module.scss';

const Home = () => (
  <div className={styles.home}>
    <div className="container">
      <div className={styles.profile}>
        <div className={styles['image']}>
          <img
            src={profileIMG}
            alt="Robert Skwiat"
            className="img-responsive"
            tabIndex="0"
          />
        </div>
        <div className={styles['bio']}>
          <Logo width="300px" />
          {about.map((text, i) => (
            <p key={i}>{text.copy}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Home;

import React from 'react';

import { Logo } from 'components/icons';
import profileIMG from 'images/headshot.png';
import styles from 'scss/home.module.scss';
import about from 'constants/about';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="container">
        <div className={styles.profile}>
          <img src={profileIMG} alt="Robert Skwiat" className="img-responsive" />
          <div>
            <Logo width='300px' />
            {about.map((text, i) => (
              <p key={i}>{text.copy}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

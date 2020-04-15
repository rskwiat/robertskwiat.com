import React from 'react';
import Button from 'components/button';

import icons from 'constants/icons';

const Home = () => (
  <div>
    Home
    <a href={'/pdf/Robert_Skwiat_Resume.pdf'}>Download Resume</a>
    {icons.map((icon) => {
      return (
        <Button
          text={icon.title}
          key={icon.title}
          icon={icon.icon}
          link={icon.link}
        />
      );
    })}
  </div>
);

export default Home;

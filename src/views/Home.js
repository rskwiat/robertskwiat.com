import React from 'react';
import Button from 'components/button';

import icons from 'constants/icons';

const Home = () => (
  <div>
    Home
    <a href={'/pdf/Robert_Skwiat_Resume.pdf'}>Download Resume</a>
    <p>
      Software Engineer specializing in React, Redux and JavaScript. Diverse
      company background consisting of 10+ years of experience in advertising
      and product development.
    </p>
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

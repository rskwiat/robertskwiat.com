import React from 'react';
import content from './content/about';
import Button from './layout/button';

const About = () => (
  <div className="about">
    {
      content.map((contents, i) =>
        <p key={i}>
          {contents.copy}
        </p>
      )
    }
    <Button link="resume" text="View Resume" />
  </div>
);

export default About;

import React from 'react';

import styled from 'styled-components';

const Project = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  h1 {
    margin: 0;
  }
`;

const Projects = () => {
  return (
    <Project>
      <h1>Projects</h1>
      <p>Coming Soon</p>
    </Project>
  );
};

export default Projects;

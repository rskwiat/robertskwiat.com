import React from 'react';
import styled from 'styled-components';

const LoadingScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loading = () => {
  return <LoadingScreen />;
};

export default Loading;

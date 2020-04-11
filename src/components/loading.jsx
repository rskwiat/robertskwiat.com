import React from 'react';
import styled from 'styled-components';

const LoadingStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    color: ${(props) => props.theme.gray};
    font-size: 3.6rem;
    font-weight: normal;
  }
`;

const Loading = () => {
  return (
    <LoadingStyle>
      <h1>Loading</h1>
    </LoadingStyle>
  );
};

export default Loading;

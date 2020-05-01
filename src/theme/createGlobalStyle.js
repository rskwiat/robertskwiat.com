import { createGlobalStyle } from 'styled-components';
import { device } from './theme';
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  background: ${(props) => props.theme.bg};
  margin: 0;
  color: ${(props) => props.theme.gray};
  font-family: ${(props) => props.theme.bodyFont};
  min-height: 100vh;
  height: 100%;

  @media ${device.tablet} {
    border-left: .5rem solid ${(props) => props.theme.gray};
    border-right: .5rem solid ${(props) => props.theme.gray};
  }

  &:before,
  &:after {
    content: "";
    position: fixed;
    background: ${(props) => props.theme.gray};
    left: 0;
    right: 0;
    @media ${device.tablet} {
      height: .5rem;
    }
  }

  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }
}


html {
  font-size: 62.5%;
}

p {
  font-size: 1.7rem;
}

a {
  text-decoration: none;
}

.container {
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1.8rem;
}
`;

export default GlobalStyle;

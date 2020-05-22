import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  background: ${(props) => props.theme.bg};
  margin: 0;
  color: ${(props) => props.theme.gray};
  font-family: ${(props) => props.theme.bodyFont};
}

html {
  font-size: 62.5%;
}

p {
  font-size: 1.7rem;
  line-height: 1.8;
  margin: 0 0 2rem;
}

a {
  text-decoration: none;
}
`;

export default GlobalStyle;

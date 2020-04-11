import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  color: ${(props) => props.theme.gray};
  font-family: ${(props) => props.theme.bodyFont};
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

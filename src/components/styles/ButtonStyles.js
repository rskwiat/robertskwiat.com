import styled from 'styled-components';

const ButtonStyles = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.gray};
  border: 1px solid ${(props) => props.theme.gray};
  background: none;
  cursor: pointer;
  position: relative;
  padding: 1rem 1.6rem;
  text-align: center;
  width: 18rem;
  transition: all 0.3s;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    transition: all 0.3s;
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${(props) => props.theme.gray};
  }

  &:hover {
    color: #fff;
    fill: currentColor;
    &:after {
      width: 100%;
    }
  }
`;

export default ButtonStyles;

import styled from 'styled-components';

const NavStyles = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  a {
    position: relative;
    display: inline-block;
    padding: 2rem 2.5rem;
    color: ${(props) => props.theme.gray};
    font-size: 2rem;
    font-weight: bold;
    transition: color 350ms ease-in-out;
    &:hover {
      color: ${(props) => props.theme.highlight};
    }
    &.active {
      &:after {
        content: '';
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        left: 1.75rem;
        z-index: -1;
        background: ${(props) => props.theme.highlight};
      }
    }
  }
`;

export default NavStyles;

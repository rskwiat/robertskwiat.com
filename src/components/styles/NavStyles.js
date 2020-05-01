import styled from 'styled-components';

const NavStyles = styled.nav`
  background: ${(props) => props.theme.gray};
  position: relative;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);

  a {
    display: inline-block;
    padding: 2rem 1rem;
    color: ${(props) => props.theme.white};
    font-size: 1.6rem;
    transition: background 350ms ease-in-out;
    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }

    &.active {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;

export default NavStyles;

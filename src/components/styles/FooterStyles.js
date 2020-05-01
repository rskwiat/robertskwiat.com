import styled from 'styled-components';

const FooterStyles = styled.footer`
  border-top: 1px solid ${(props) => props.theme.gray};
  padding: 2rem 0;
  margin-top: 4rem;

  p {
    font-size: 1.2rem;
    margin: 0;
  }
`;

export default FooterStyles;

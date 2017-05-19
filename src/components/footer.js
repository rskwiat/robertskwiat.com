import React from 'react';

import '../css/footer.css';

const Footer = ({ copyright }) => (
  <footer className="footer">
    <div className="container">
      <div className="row row-padding">
        <p>{copyright}</p>
      </div>
    </div>
  </footer>
);

Footer.defaultProps = {
  copyright: 'Copyright'
};

Footer.propTypes = {
  copyright: React.PropTypes.string.isRequired
};

export default Footer;

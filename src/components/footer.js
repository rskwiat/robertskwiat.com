import React from "react";
import PropTypes from "prop-types";

import styles from "scss/footer.module.scss";

const Footer = ({ copyright }) => {
  return (
    <footer className={styles.footer}>
      <p>{copyright}</p>
    </footer>
  );
};

Footer.propTypes = {
  copyright: PropTypes.string.isRequired
};

Footer.defaultProps = {
  copyright: "2019"
};

export default Footer;

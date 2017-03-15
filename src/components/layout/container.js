import React from 'react';

const Container = ({ children }) => (
  <div className="container">
    {children}
  </div>
);

Container.defaultProps = {
  children: '<div />'
};

Container.propTypes = {
  children: React.PropTypes.element
};

export { Container };

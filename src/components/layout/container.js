import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

Container.PropTypes = {
  children: React.PropTypes.string.isRequired
};

export { Container };

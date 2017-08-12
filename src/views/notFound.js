import React from 'react';
import Button from '../components/layout/button';
import homer from '../images/homer.gif';

const NotFound = () => (
  <div className="container error">
    <img src={homer} alt="404" />
    <h1>Whoops...</h1>
    <p>Looks like something went wrong, don't worry it happens to the best of us.</p>
    <Button link="/" text="Go Home" />
  </div>
);

export default NotFound;

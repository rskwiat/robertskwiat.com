import React from 'react';
import { Container } from './components/layout';
import routes from './routes';
import Navigation from './components/navigation';

import './css/app.css';

const App = () => (
  <Container>
    <Navigation />
    { routes }
  </Container>
);

export default App;

import React from 'react';
import { render } from 'react-dom';

import 'scss/index.scss';
import App from 'components/App';

const elem = document.getElementById('root');

render(<App />, elem);

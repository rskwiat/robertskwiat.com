import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('Test that the App component renders', () => {
   it('renders without crashing', () => {
      const wrapper = shallow(<App />);
      const app = wrapper.find('.app')
      expect(app.length).toBe(1);
    });
});
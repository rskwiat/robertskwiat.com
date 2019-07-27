import React from 'react';
import { mount } from 'enzyme';

import Contact from '../contact';

let wrapper;

describe('the Contact component renders', () => {
  it('renders with the icons and text', () => {
    wrapper = mount(<Contact />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the social div', () => {
    wrapper = mount(<Contact />);
    const app = wrapper.find('.social')
    expect(app.length).toBe(1);
  });

});
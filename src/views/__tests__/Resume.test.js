import React from 'react';
import { mount } from 'enzyme';
import Resume from '../Resume';

describe('The Home page component', () => {
  test('The component', () => {
    const component = mount(<Resume />);
    expect(component).toMatchSnapshot();
  });
});
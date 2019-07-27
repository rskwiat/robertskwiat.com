import React from 'react';
import { shallow } from 'enzyme';

import Navigation from '../navigation';

describe('that the Navigation component renders', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper).toMatchSnapshot();
  });
});
import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../Footer';

let wrapper;

describe('the Footer component renders', () => {
  it('renders with the default text of 2019', () => {
    wrapper = shallow(<Footer />);
    expect(wrapper.text()).toEqual('2019');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without crashing with props', () => {
    wrapper = shallow(<Footer copyright="This is an updated 2019 " />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have some text in the copyright props', () => {
    wrapper = shallow(<Footer copyright="Some Text" />);
    expect(wrapper.text()).toEqual('Some Text');
  });

});
import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../loading';

let wrapper;

describe('the loading component renders', () => {
  it('renders without crashing', () => {
    wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the loading div', () => {
    wrapper = shallow(<Loading />);
    const app = wrapper.find('.loading')
    expect(app.length).toBe(1);
  });

  it('should have the text of loading', () => {
    wrapper = shallow(<Loading />);
    expect(wrapper.text()).toEqual('Loading');
  });
});
import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../Home';

describe('The Home page component', () => {
  test('The component', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
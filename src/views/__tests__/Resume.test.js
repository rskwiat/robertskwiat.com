import React from 'react';
import renderer from 'react-test-renderer';

import Resume from '../Resume';

describe('The Home page component', () => {
  test('The component', () => {
    const component = renderer.create(<Resume />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
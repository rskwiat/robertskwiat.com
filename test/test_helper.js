import React from 'react';
import TestUtils from 'react-addons-test-utils';

function renderComponent(ComponentClass) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<ComponentClass />);
  const result = renderer.getRenderOutput();
  return result;
}

export default renderComponent;

/* eslint-env mocha */

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import assert from 'assert';
import Home from '../../src/components/home';

const renderer = ReactTestUtils.createRenderer();

describe('Check if Home Component Mounts', () => {
  let result;

  beforeEach(() => {
    renderer.render(<Home />);
    result = renderer.getRenderOutput();
  });

  it('Home Component Mounts', () => {
    assert(result);
  });

  it('Shows the Homepage text', () => {
    const { children } = result.props.children.props;
    assert(children === 'Home Page');
  });
});

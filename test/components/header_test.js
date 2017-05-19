/* eslint-env mocha */

import assert from 'assert';
import Header from '../../src/components/header';
import renderComponent from '../test_helper';

describe('Header Component', () => {
  let result;

  beforeEach(() => {
    result = renderComponent(Header);
  });

  it('Component Renders Correctly', () => {
    assert(result);
  });

  it('Shows the Homepage text', () => {
    const name = result.props.children.props.children;
    assert(name === 'Default Name');
  });
});

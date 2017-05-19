/* eslint-env mocha */

import assert from 'assert';
import Footer from '../../src/components/footer';
import renderComponent from '../test_helper';


describe('Footer Component', () => {
  let result;

  beforeEach(() => {
    result = renderComponent(Footer);
  });

  it('Component Renders Correctly', () => {
    assert(result);
  });

  it('Shows the copyright text', () => {
    const { children } = result.props.children.props;
    assert(children === 'Copyright');
  });
});

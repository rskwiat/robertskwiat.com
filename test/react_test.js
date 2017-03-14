/* eslint-env mocha */

import Home from '../src/components/home';
import assert from 'assert';
import { renderComponent } from './test_helper';

describe('Check if Home Component Mounts', () => {
  it('App Component Mounts', () => {
    const component = renderComponent(Home);
    assert(component);
  });
});

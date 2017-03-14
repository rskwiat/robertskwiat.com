
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';

const document = jsdom.jsdom(`
  <!DOCTYPE html><html><body><div id='root'></div></body></html>
  `);
const window = document.defaultView;

global.document = document;
global.window = window;
global.navigator = { userAgent: 'node:js' };

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance = TestUtils.renderIntoDocument(
    <ComponentClass {...props} />
  );
  return ReactDOM.findDOMNode(componentInstance);
}

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

export { renderComponent };

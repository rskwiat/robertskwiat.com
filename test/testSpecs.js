import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import jasmineReact from 'jasmine-react-helpers';

import Resume from '../app/components/pages/resume';
import Header from '../app/components/sections/header';
import loader from '../app/functions/loader.js'

//Partial Tests
import Button from '../app/components/partials/button';
import Copyright from '../app/components/partials/copyright';
import Icon from '../app/components/partials/icons';

describe('The loader component', function(){
  var myApp;

  beforeEach(function(){
    myApp = document.createElement('div');
    myApp.id = 'app';
    document.body.appendChild(myApp);
  });

  it('Runs the loader, contains a div with an ID of app and has a class of loaded', function(){
    loader();
    expect(myApp.className).toBe('loaded');
  });

  afterEach(function(){
    document.body.removeChild(myApp);
  });

});

describe('The Resume page', function(){
  var myApp;
  var component;

  beforeEach(function(){
    myApp = document.createElement('div');
    myApp.id = 'app';
    document.body.appendChild(myApp);
  });

  it('Renders the resume page, into div with id of #app', function(){
    component = ReactTestUtils.renderIntoDocument(<Resume/>);
    expect(component).toBeTruthy();
  });

  afterEach(function(){
    document.body.removeChild(myApp);
  });

});

describe('The Header module', function(){
  var component;

  beforeEach(function(){
    component = ReactTestUtils.renderIntoDocument(<Header imgUrl="http://imgur.com" name='Robert Skwiat' />);
  });

  it('The textContent of the module should have my name', function(){
    expect(ReactDOM.findDOMNode(component).textContent).toMatch(/Robert Skwiat/);
  });

  it('The props of imgURL should match a fake url supplied (http://imgur.com)', function(){
    var props = component.props;
    expect(props.imgUrl).toMatch('http://imgur.com');
  });
});


//Describe all the components
describe('Describe a button component', function(){
  var component;

  beforeEach(function(){
    component = ReactTestUtils.renderIntoDocument(<Button link="test" title="Testing a Button..."/>);
  });

  it('should have a link that goes to url /test', function(){
    var props = component.props;
    expect(props.link).toMatch('test');
  });

  it('should also have a title of testing a button...', function(){
    var props = component.props;
    expect(props.title).toMatch('Testing a Button...');
  })

});

describe('The icon component', function(){
  var component;

  beforeEach(function(){
    component = ReactTestUtils.renderIntoDocument(
      <Icon icon="fa fa-default" title="default" link="http://facebook.com"/>
    );
  });

  it('should have an icon that has the className - fa fa-default', function(){
    var props = component.props;
    expect(props.icon).toMatch('fa fa-default');
  });

  it('should have a title of default', function(){
    var props = component.props;
    expect(props.title).toMatch('default');
  });

  it('should link to facebook', function(){
    var props = component.props;
    expect(props.link).toMatch('http://facebook.com');
  });
});

describe('The Copyright component', function(){
  var component;

  beforeEach(function(){
    component = ReactTestUtils.renderIntoDocument(<Copyright/>);
  });

  it('does not blow up when rendering', function () {
    expect(component).toBeTruthy(); //passes
  });

});

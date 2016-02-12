import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router';

import AppStore from '../stores/AppStore';

import Nav from './partials/nav';
export default class App extends Component{

  // Add change listeners to stores
  componentDidMount(){
    setTimeout(() => {
      document.body.classList.remove('hidden');
    }, 500);
    AppStore.addChangeListener(this._onChange.bind(this))
  }

  // Remove change listeners from stores
  componentWillUnmount(){
    AppStore.removeChangeListener(this._onChange.bind(this))
  }

  _onChange(){
    this.setState(AppStore)
  }

  getStore(){
    AppDispatcher.dispatch({
      action: 'get-app-store'
    })
  }

  render(){

    const data = AppStore.data
    const Routes = React.cloneElement(this.props.children, { data: data })

    return(
      <div>
          <Nav data={ data }/>
          { Routes }
      </div>
    )
  }
}

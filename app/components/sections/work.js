import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavLink from '../partials/nav-link';

class Work extends Component {

  renderContent(){
    return this.props.data.map((data) => {      
      return(
        <div>
          <p key={data.id}>{data.blurb}</p>
        </div>
      );
    });
  }

  render(){


    return (
      <section id="work" className="container">
        {this.renderContent()}
      </section>
    )
  }
}


function mapStateToProps(state){
  return {
    data: state.work
  };
}


export default connect(mapStateToProps)(Work);

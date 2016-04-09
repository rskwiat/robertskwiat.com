import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Work extends Component {

  renderContent(){
    return this.props.data.map((data) => {
      return(
        <div key={data.id}>
          <img src={data.placeholder} alt={data.blurb}/>
          <p>{data.blurb}</p>
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

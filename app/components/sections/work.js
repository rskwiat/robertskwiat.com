import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Work extends Component {

  renderContent(){

    var propData = this.props.data

    if (propData == ''){
      return(
        <div className="">
          <h2>Examples of work coming soon!</h2>
        </div>
      )
    } else {
      return propData.map((data) => {
          return(
            <div className="inner gallery-item" id={data.id} key={data.num}>
              <h4>{data.name}</h4>
              <p>{data.company}</p>
              <div className="overlay"></div>
            </div>
          );
      });
    }
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

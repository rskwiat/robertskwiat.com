import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Work extends Component {

  renderContent(){
    var propData = this.props.data

    if (propData == ''){
      console.log('adele song...');
      return(
        <div className="">
          <h2>Examples of work coming soon!</h2>
        </div>
      )
    } else {
      return propData.map((data) => {
          return(
            <div className="flex-item gallery-item" key={data.id}>
              <img src={data.icon} alt={data.name}/>
              <p>{data.name}</p>
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

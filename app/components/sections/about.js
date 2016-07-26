import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../partials/button';

class About extends Component {
  renderContent(){
    return this.props.data.map((data) => {
      return(
        <p key={data.id}>{data.paragraph}</p>
      );
    });
  }

  render(){
    return (
      <section id="about" className="container">
        <div>
          {this.renderContent()}
          <Button link="/resume" title="View Resume"/>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state){
  return {
    data: state.home
  };
}


export default connect(mapStateToProps)(About);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions/index';
import { bindActionCreators } from 'redux';


class Home extends Component {
  renderContent(){
    return this.props.data.map((data) => {
      return(
        <li key={data.title}
          className="list-group-item">{data.title}</li>
      );
    });
  }

  render(){
    return (
      <div className="column column-8 column-centered">
        {this.renderContent()}
        <p><a className="btn btn-inverse" href="#">Download Resume</a></p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    data: state.home
  };
}

export default connect(mapStateToProps)(Home);

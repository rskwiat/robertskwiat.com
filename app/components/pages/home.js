import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../partials/header';



class Home extends Component {
  renderContent(){
    return this.props.data.map((data) => {
      return(
        <p key={data.id}>{data.paragraph}</p>
      );
    });
  }

  render(){
    return (
      <div>
        <div className="container">
          <Header imgUrl='http://i.imgur.com/5lslF2U.jpg' id='logo' name='Robert Skwiat'/>
        </div>
        <div className="container">
          <section id="about" className="content centered">
            {this.renderContent()}
            <p><a className="btn btn-inverse" href="#">Download Resume</a></p>
          </section>
        </div>
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

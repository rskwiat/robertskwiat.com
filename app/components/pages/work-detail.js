import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class WorkDetail extends Component{

  renderContent(){

  }

  componentWillUpdate(){

  }

  render(){
    const data = this.props.data;
    const detail = data.workdetail;

    const location = this.props.location.pathname.split('/');
    const slug = location[2];

    let heroImage = '';
    let detailWriteup = '';

    console.log(slug);

    for (var i = 0; i < data.length; i++) {
      if (data[i].title == slug){
        detailWriteup = 'Page exists';
        break;
      } else {
        detailWriteup = 'Work Not Found';
      }

    }

    return(
      <div>
        {this.renderContent()}
        { detailWriteup }
      </div>
    )

  }
}

function mapStateToProps(state){
  return {
    data: state.work
  };
}

export default connect(mapStateToProps)(WorkDetail);

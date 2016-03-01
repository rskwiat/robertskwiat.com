import React, { Component } from 'react';

export default class WorkDetail extends Component{

  componentWillMount(){

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


    for (var i = 0; i < detail.length; i++) {
      if ( detail[i].slug == slug) {
        heroImage = detail[i].image;
        detailWriteup = detail[i].details;
        break;
      } else {
        detailWriteup = 'Work Not Found';
      }
    }

    return(
      <div>
        <img src="{ heroImage }"/>
        <p>{detailWriteup}</p>
      </div>
    )





  }
}

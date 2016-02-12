import React, { Component } from 'react';

export default class WorkDetail extends Component{

  componentWillMount(){




  }


  render(){

    const data = this.props.data;
    const detail = data.workdetail;

    const slug_arr = window.location.href.split('/');
    const page_slug = slug_arr[4];

    
    return(
      <div>
        <h2>Work Detail Page</h2>

        <div>Some Work Page Content</div>
      </div>
    )





  }
}

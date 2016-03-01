import React, { Component} from 'React';

export default class Header extends Component {
  componentDidMount(){
    document.body.className=''
  }
  render(){
    return (
      <div>
          <header>
            <h1> dis is my header </h1>
          </header>
      </div>
    )
  }
}

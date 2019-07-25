import React, { Component} from 'react';
import ReactMarkdown from 'react-markdown';

const resume = require('constants/resume.md')

class Resume extends Component {
  state = {
    resume: null,
  }

  componentDidMount() {
    fetch(resume)
      .then(res => res.text())
      .then(text => this.setState({ resume: text }));
  }

  render() {
    const {
      resume
    } = this.state;

    return (
      <div>
        <div className="container">
          <ReactMarkdown source={resume} />
        </div>  
      </div>
    );
  }
}

export default Resume;

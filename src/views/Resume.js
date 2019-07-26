import React, { Component} from 'react';
import ReactMarkdown from 'react-markdown';
import Loading from 'components/loading';

import resume from 'constants/resume.md';

class Resume extends Component {
  state = {
    resume: null,
  }

  async componentDidMount() {
    const res = await fetch(resume);
    const text = await res.text();
    await this.setState({ resume: text });
  }

  render() {
    const {
      resume
    } = this.state;

    return (
      <div>
        <div className="container">
          { resume ? <ReactMarkdown source={resume} />: <Loading />}
        </div>  
      </div>
    );
  }
}

export default Resume;

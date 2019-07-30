import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Loading from 'components/loading';

import resume from 'constants/resume.md';
import styles from 'scss/resume.module.scss';

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
      <div className={styles['resume']}>
        { resume ? <ReactMarkdown source={resume} />: <Loading />}
      </div>
    );
  }
}

export default Resume;

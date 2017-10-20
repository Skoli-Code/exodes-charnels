import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
// custom markdown renderer
import Underline from 'components/atoms/Underline';
import BlockQuote from 'components/atoms/BlockQuote';
import Image from 'components/atoms/Image';

import './styles.css';

const renderers = {
  BlockQuote,
  Code: Underline,
};

class Content extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  };
  constructor(props){
    super(props);
    this.state = {
      content: null,
    };
  }
  componentDidMount(){
    const { source } = this.props;
    fetch(source)
      .then(response => response.text())
      .then(content => {
        this.setState({ content });
      });
  }

  render(){
    const { content }  = this.state;
    if(!content){ return null; }
    return (
      <Markdown source={content} renderers={renderers} />
    );
  }
}

export default Content;

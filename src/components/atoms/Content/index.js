import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
// custom markdown renderer
import Underline from 'components/atoms/Underline';
import GenericLink from 'components/atoms/Link';
import BlockQuote from 'components/atoms/BlockQuote';

import './styles.css';

const Link = ({ href, children }) => <GenericLink to={href}>{ children }</GenericLink>

const renderers = {
  BlockQuote,
  Link,
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

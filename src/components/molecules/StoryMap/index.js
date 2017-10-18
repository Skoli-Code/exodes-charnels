import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class StoryMap extends Component {
  static propTypes = {
    url: PropTypes.string,
  }
  constructor(props){
    super(props);
    this.state = { loading: true };
  }

  bindIframe(ref){
    if(!ref){ return; }
    this.iframeRef = ref;
    this.iframeRef.onload = () => {
      this.setState({ loading: false });
    }
  }

  render(){
    const { url } = this.props;
    const { loading } = this.state;
    const klass = `storymap ${loading ? 'storymap--loading':''}`;
    return (
      <div className={klass}>
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          ref={(ref)=>this.bindIframe(ref)} src={url}
        />
      </div>
    );
  } 
}
export default StoryMap;

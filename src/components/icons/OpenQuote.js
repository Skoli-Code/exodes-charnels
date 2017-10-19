import React from 'react';
import PropTypes from 'prop-types';
import Svg from 'components/atoms/Svg';
// Quote by Yoshi from the Noun Project

const OpenQuote = ({
  width,
  height,
  ...props,
}) => (
  <Svg
    width={width}
    height={height}
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    style={{
      enableBackground:'new 0 0 100 100'
    }}
    {...props}
  >
    <path d="M30.7,42c0,6.1,12.6,7,12.6,22c0,11-7.9,19.2-18.9,19.2C12.7,83.1,5,72.6,5,61.5c0-19.2,18-44.6,29.2-44.6  c2.8,0,7.9,2,7.9,5.4S30.7,31.6,30.7,42z"/>
    <path d="M82.4,42c0,6.1,12.6,7,12.6,22c0,11-7.9,19.2-18.9,19.2c-11.8,0-19.5-10.5-19.5-21.6c0-19.2,18-44.6,29.2-44.6  c2.8,0,7.9,2,7.9,5.4S82.4,31.6,82.4,42z"/>
  </Svg>
);

OpenQuote.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

OpenQuote.defaultProps = {
  height: 40,
  width: 40,
};

export default OpenQuote;

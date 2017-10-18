import React from 'react';

const Svg = ({ width, height, children, ...props}) => (
  <svg width={width} height={height} {...props}>
    { children }
  </svg>
);

export default Svg;

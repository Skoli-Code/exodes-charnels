import React from 'react';

const Svg = ({ width, height, children }) => (
  <svg width={width} height={height}>
    { children }
  </svg>
);

export default Svg;

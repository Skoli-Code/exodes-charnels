import React from 'react';
import PropTypes from 'prop-types'; 

import Svg from 'components/atoms/Svg';

const Triangle = ({ width, height, rotate }) => (
  <Svg width={width} height={height}>
    <polygon
      points={`0,0 ${width/2},${height} ${width},0`}
      transform={`rotate(${rotate})`}
    />
  </Svg>
);

Triangle.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  rotate: PropTypes.number,
}
Triangle.defaultProps = {
  width: 30,
  height: 30,
  rotate: 0,
};
export default Triangle;

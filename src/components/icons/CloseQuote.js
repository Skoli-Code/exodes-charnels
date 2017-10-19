import React from 'react';
import PropTypes from 'prop-types';
import Svg from 'components/atoms/Svg';
// Quote by Yoshi from the Noun Project

const CloseQuote = ({
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
  <path d="M69.3,58c0-6.1-12.6-7-12.6-22c0-11,7.9-19.2,18.9-19.2C87.3,16.9,95,27.4,95,38.5c0,19.2-18,44.6-29.2,44.6  c-2.8,0-7.9-2-7.9-5.4C58,74.3,69.3,68.4,69.3,58z"/>
  <path d="M17.6,58C17.6,52,5,51,5,36.1c0-11,7.9-19.2,18.9-19.2c11.8,0,19.5,10.5,19.5,21.6c0,19.2-18,44.6-29.2,44.6  c-2.8,0-7.9-2-7.9-5.4C6.3,74.3,17.6,68.4,17.6,58z"/>
</Svg>
);

CloseQuote.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

CloseQuote.defaultProps = {
  height: 40,
  width: 40,
};

export default CloseQuote;

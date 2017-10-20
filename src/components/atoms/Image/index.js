import React from 'react';
import Centered from 'components/atoms/Centered';

import './styles.css';

const Image = (props) => (
  <Centered>
    <img {...props}/>
  </Centered>
);

export default Image;

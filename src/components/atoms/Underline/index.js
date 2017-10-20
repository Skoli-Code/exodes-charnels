import React from 'react';

import './styles.css';

const Underline = ({ children, ...props }) => {
  console.log('Underline', props);
  return (
  <span class="underline">{ children }</span>
);
}

export default Underline;

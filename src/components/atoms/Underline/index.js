import React from 'react';

import './styles.css';

const Underline = ({ children, ...props }) => {
  return (
  <span class="underline">{ children }</span>
);
}

export default Underline;

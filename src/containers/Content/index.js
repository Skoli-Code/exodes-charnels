import React from 'react';
import './styles.css';

const ContentContainer = ({ children }) => (
  <div className="container container--content">
    { children }
  </div>
);

export default ContentContainer;

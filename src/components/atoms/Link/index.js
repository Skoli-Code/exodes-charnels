import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './styles.css';

const Anchor = ({ to, ...otherProps }) => (
  <a target='_blank' rel='nofollow' {...otherProps}/>
);

const Link = ({ to, ...otherProps}) => {
  let LinkComponent = RouterLink;
  if(to.startsWith('http')){
    LinkComponent = Anchor;
  }
  return (
    <LinkComponent className='link' to={to} {...otherProps}/>
  );
};

export default Link;

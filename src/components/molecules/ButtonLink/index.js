import React from 'react';
import Link from 'components/atoms/Link';
import './styles.css';

const ButtonLink = (props) => (
  <Link className='button' {...props}/>
);

export default ButtonLink;

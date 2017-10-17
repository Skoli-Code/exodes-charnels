import React from 'react';
import { Link } from 'react-router-dom'; 
import Triangle from 'components/molecules/Triangle';
import './styles.css';

const ArrowLink = (props) => (
  <Link className='arrow-link' {...props}><Triangle/></Link>
);
export default ArrowLink;

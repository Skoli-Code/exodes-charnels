import React from 'react';
import logo from './logo.png';
import Link from 'components/atoms/Link';
import './styles.css';

const MainLogo = () => (
  <Link className='main-logo' to='https://popsciences.universite-lyon.fr/'>
    <img src={logo} alt='Logo principal'/>
  </Link>
);

export default MainLogo;

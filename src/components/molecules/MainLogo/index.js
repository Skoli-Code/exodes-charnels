import React from 'react';
import Link from 'components/atoms/Link';
import './styles.css';

const MainLogo = () => (
  <Link className='main-logo' to='/'>
    <span className="logo"></span>
  </Link>
);

export default MainLogo;

import React from 'react';
import RetinaImage from 'react-retina-image';
import Link from 'components/atoms/Link';
import './styles.css';

const MainLogo = () => (
  <Link className='main-logo' to='https://popsciences.universite-lyon.fr/'>
    <span class="logo"></span>
  </Link>
);

export default MainLogo;

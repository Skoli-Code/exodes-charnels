import React from 'react';
import { NavLink } from 'react-router-dom';

import Home from 'components/icons/Home';
import './styles.css';

const HomeButton = () => (
  <NavLink to='/' className='home-button'>
    <Home width={35} height={35} />
  </NavLink>
);

export default HomeButton;

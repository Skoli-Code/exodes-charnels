import React from 'react';

import { NavLink } from 'react-router-dom';
import { list } from 'utils/parcours';

import './styles.css';

const ParcoursNav = () => (
  <div className='parcours-nav'>
    { list().map(parcour => (
      <NavLink
        activeClassName='link--active'
        className='link'
        to={`/parcours/${parcour.slug}`}
      >
        { parcour.title }
      </NavLink>
    ))}
  </div>
);

export default ParcoursNav;

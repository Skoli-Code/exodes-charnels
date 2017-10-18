import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.css';

const NavigationTab = ({ to, children }) => (
  <NavLink
    to={to}
    className='navigation-tab'
    activeClassName='navigation-tab--active'
  >
    { children }
  </NavLink>
)

NavigationTab.propTypes = {
  to: PropTypes.string.isRequired,
}

export default NavigationTab;

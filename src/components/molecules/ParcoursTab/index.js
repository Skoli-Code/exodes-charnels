import React from 'react';
import { Route } from 'react-router-dom';

import NavigationTab from 'components/atoms/NavigationTab';
const ParcoursDropdown = () => (
  <span>TODO</span>
)
const ParcoursTab = () => (
  <NavigationTab to='/parcours'>
    <span>Parcours</span>
    <Route path='/parcours/:slug' component={ParcoursDropdown}/>
  </NavigationTab>
);

export default ParcoursTab;

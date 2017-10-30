import React from 'react';
import NavigationTab from 'components/atoms/NavigationTab';

const ParcoursTab = () => (
  <NavigationTab to='/parcours' onClick={()=>window.location.assign('/parcours')}>
    Parcours
  </NavigationTab>
);

export default ParcoursTab;

import React from 'react';
import { Route } from 'react-router-dom';

import IntroductionTab from './IntroductionTab';
import AboutTab from './AboutTab';
import ParcoursTab from './ParcoursTab';
import ConclusionTab from './ConclusionTab';
import GlossaireTab from './GlossaireTab';
import ParcoursDropdown from './ParcoursDropdown';


const NavigationTabs = () => [
  <IntroductionTab />,
  <ParcoursTab />,
  <Route path='/parcours/:slug' component={ParcoursDropdown} />,
  <ConclusionTab />,
  <GlossaireTab />,
  <AboutTab />
];

export default NavigationTabs;

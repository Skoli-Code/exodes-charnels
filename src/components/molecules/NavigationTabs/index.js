import React from 'react';
import { Route } from 'react-router-dom';

import IntroductionTab from './IntroductionTab';
import AboutTab from './AboutTab';
import ParcoursTab from './ParcoursTab';
import ConclusionTab from './ConclusionTab';
import GlossaireTab from './GlossaireTab';
import ParcoursDropdown from './ParcoursDropdown';


const NavigationTabs = () => [
  <IntroductionTab key='intro-tab' />,
  <ParcoursTab key='parcours-tab'/>,
  <Route key='parcours-choice-tab' path='/parcours/:slug' component={ParcoursDropdown} />,
  <ConclusionTab key='conclusion-tab'/>,
  <GlossaireTab key='glossary-tab'/>,
  <AboutTab key='about-tab'/>
];

export default NavigationTabs;

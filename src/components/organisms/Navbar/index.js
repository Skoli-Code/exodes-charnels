import React from 'react';
import { Route } from 'react-router-dom';

import NavbarContainer from 'containers/Navbar';
import MainLogo from 'components/molecules/MainLogo';
import HomeButton from 'components/molecules/HomeButton';
import IntroductionTab from 'components/molecules/IntroductionTab';
import ParcoursTab from 'components/molecules/ParcoursTab';
import ConclusionTab from 'components/molecules/ConclusionTab';
import ParcoursDropdown from 'components/molecules/ParcoursDropdown';

const Navbar = () => (
  <NavbarContainer>
    <MainLogo/>
    <HomeButton/>
    <IntroductionTab/>
    <ParcoursTab/>
    <Route path='/parcours/:slug' component={ParcoursDropdown}/>
    <ConclusionTab/>
  </NavbarContainer>

);

export default Navbar;

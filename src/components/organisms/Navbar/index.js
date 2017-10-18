import React from 'react';

import NavbarContainer from 'containers/Navbar';
import MainLogo from 'components/molecules/MainLogo';
import HomeButton from 'components/molecules/HomeButton';
import IntroductionTab from 'components/molecules/IntroductionTab';
import ParcoursTab from 'components/molecules/ParcoursTab';
import ConclusionTab from 'components/molecules/ConclusionTab';

const Navbar = () => (
  <NavbarContainer>
    <MainLogo/>
    <HomeButton/>
    <IntroductionTab/>
    <ParcoursTab/>
    <ConclusionTab/>
  </NavbarContainer>

);

export default Navbar;

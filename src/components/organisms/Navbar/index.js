import React from 'react';
import { Route } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import MEDIA_QUERIES from 'constants/media-queries';
import NavbarContainer from 'containers/Navbar';
import MainLogo from 'components/molecules/MainLogo';
import HomeButton from 'components/molecules/HomeButton';
import IntroductionTab from 'components/molecules/IntroductionTab';
import AboutTab from 'components/molecules/AboutTab';
import ParcoursTab from 'components/molecules/ParcoursTab';
import ConclusionTab from 'components/molecules/ConclusionTab';
import ParcoursDropdown from 'components/molecules/ParcoursDropdown';
import NavbarMenu from 'components/organisms/NavbarMenu';
// TODO: 
// - social buttons
// - hamburger menu for mobiles / small devices.
const Navbar = () => (
  <NavbarContainer>
    <MainLogo/>
    <HomeButton/>
    <MediaQuery
      query={MEDIA_QUERIES.desktop}
      className='navigation-tabs'> 
      <IntroductionTab/>
      <ParcoursTab/>
      <Route path='/parcours/:slug' component={ParcoursDropdown}/>
      <ConclusionTab/>
      <AboutTab/>
    </MediaQuery>

    <MediaQuery 
      query={MEDIA_QUERIES.mobile}
      className='navigation-menu'  
    >
      <NavbarMenu />
    </MediaQuery>
  </NavbarContainer>

);

export default Navbar;

import React from 'react';
import MediaQuery from 'react-responsive';
import MEDIA_QUERIES from 'constants/media-queries';
import NavbarContainer from 'containers/Navbar';
import MainLogo from 'components/molecules/MainLogo';
import HomeButton from 'components/molecules/HomeButton';
import SocialSharing from 'components/molecules/SocialSharing';
import NavigationMenu from 'components/molecules/NavigationMenu';
import NavigationTabs from 'components/molecules/NavigationTabs';

const SocialSharingTab = () => (
  <div className='social-sharing-tab'>
    <SocialSharing/>
  </div>
);
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
      <NavigationTabs/>
      <SocialSharingTab/>
    </MediaQuery>

    <MediaQuery 
      query={MEDIA_QUERIES.mobile}
      className='navigation-menu'  
    >
      <NavigationMenu>
        <SocialSharingTab/>
        <NavigationTabs/>
      </NavigationMenu>
    </MediaQuery>
  </NavbarContainer>

);

export default Navbar;

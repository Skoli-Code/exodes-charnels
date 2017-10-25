import React from 'react';
import ButtonLink from 'components/molecules/ButtonLink';
import Centered from 'components/atoms/Centered';
import MediaQuery from 'react-responsive';
import MEDIA_QUERIES from 'constants/media-queries';

import './styles.css';
import cover from './cover.jpg';
import logo_esoep from './esoep.svg'

const styles = {
  backgroundImage:`url(${cover})`
};

const Home = () => (
  <div
    className='cover'
    style={styles}
  >
    <div className='home-text'>
      <h1>Exode(s) Charnel(s)</h1>
      <h2 className='subtitle'>Trois parcours de la migration à la prostitution </h2>
      <MediaQuery query={`${MEDIA_QUERIES.mobile}, ${MEDIA_QUERIES.smallHeight}`}>
        <Centered><ButtonLink to='introduction'>COMMENCER</ButtonLink></Centered>
      </MediaQuery>
      <p>
        Une application proposée par
        <span className='logo-white'/>
        Dans le cadre des rencontres
        <img src={logo_esoep} className="logo_esoep"/>
      </p>
    </div>
    <MediaQuery query={`${MEDIA_QUERIES.desktop} and ${MEDIA_QUERIES.normalHeight}`}>
      <div className='button-holder'>
        <ButtonLink to='introduction'>COMMENCER</ButtonLink>
      </div>
    </MediaQuery>
  </div>
);

export default Home;

import React from 'react';
import ButtonLink from 'components/molecules/ButtonLink';
import Centered from 'components/atoms/Centered';
import MediaQuery from 'react-responsive';
import Link from 'components/atoms/Link';
import MEDIA_QUERIES from 'constants/media-queries';

import './styles.css';
import cover from './cover.jpg';
import logo_esoep from './esoep.png'

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
        Une fiction interactive basée sur des travaux de recherche et proposée par
        <Link to ="https://popsciences.universite-lyon.fr/">
          <span className="logo-white"></span>
        </Link>
        Dans le cadre des rencontres
        <Link to ="http://etsionenparlait.hypotheses.org/">
        <img src={logo_esoep} className="logo_esoep"/>
        </Link>
      </p>
      <MediaQuery query={`${MEDIA_QUERIES.desktop} and ${MEDIA_QUERIES.normalHeight}`}>
        <div className='button-holder'>
          <ButtonLink to='introduction'>COMMENCER</ButtonLink>
        </div>
      </MediaQuery>
    </div>
  </div>
);

export default Home;

import React from 'react';
import ButtonLink from 'components/molecules/ButtonLink';
import Centered from 'components/atoms/Centered';
import MediaQuery from 'react-responsive';
import MEDIA_QUERIES from 'constants/media-queries';

import './styles.css';
import cover from './cover.jpg';

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
      <h2 className='subtitle'>De la migration à la prostitution</h2>
      <MediaQuery query={`${MEDIA_QUERIES.mobile}, ${MEDIA_QUERIES.smallHeight}`}>
        <Centered><ButtonLink to='introduction'>EXODES CHARNELS</ButtonLink></Centered>
      </MediaQuery>
      <p>
        Une application proposée par l’Univers de Lyon dans le cadre des rencontres <br />
        « Et si on en parlait ? »
        <span className='logo-white'/>
      </p>
    </div>
    <MediaQuery query={`${MEDIA_QUERIES.desktop} and ${MEDIA_QUERIES.normalHeight}`}>
      <div className='button-holder'>
        <ButtonLink to='introduction'>EXODES CHARNELS</ButtonLink>
      </div>
    </MediaQuery>
  </div>
);

export default Home; 

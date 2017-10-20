import React from 'react';
import ButtonLink from 'components/molecules/ButtonLink';
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
      <p>
        Une application proposée par l’Univers de Lyon dans le cadre des rencontres
        <span className='logo-white'/>
      </p>
    </div>

    <div className='button-holder'>
      <ButtonLink to='introduction'>EXODES CHARNELS</ButtonLink>
    </div>
  </div>
);

export default Home; 

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
    <div className='button-holder'>
      <ButtonLink to='introduction'>EXODES CHARNELS</ButtonLink>
    </div>
  </div>
);

export default Home; 

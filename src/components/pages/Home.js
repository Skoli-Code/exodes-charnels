import React from 'react';
import ButtonLink from 'components/molecules/ButtonLink';

const styles = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  textAlign:'center',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center'
};

const Home = () => (
  <div style={styles}>
    <div style={{'margin': 'auto'}}>
      <ButtonLink to='introduction'>EXODES CHARNELS</ButtonLink>
    </div>
  </div>
);

export default Home; 

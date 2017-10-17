import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import ParcoursGallery from 'components/organisms/ParcoursGallery';
import SingleParcour from 'components/organisms/SingleParcour';

const Parcours = ({ match }) => {
console.log('match');
return (
  <div>
    <Route path={match.url} exact component={ParcoursGallery}/>
    <Route path={`${match.url}/:slug`} component={SingleParcour}/>
  </div>
);
}
export default Parcours;

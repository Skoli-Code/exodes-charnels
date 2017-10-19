import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import ParcoursGallery from 'components/organisms/ParcoursGallery';
import SingleParcour from 'components/organisms/SingleParcour';
import PageTemplate from 'components/templates/PageTemplate'; 

const Parcours = ({ match }) => ( 
  <PageTemplate>
    <Route path={match.url} exact component={ParcoursGallery}/>
    <Route path={`${match.url}/:slug`} component={SingleParcour}/>
  </PageTemplate>
);

Parcours.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  })
};

export default Parcours;

import React from 'react';
import ArrowLink from 'components/molecules/ArrowLink';
import { list } from 'utils/parcours';
import Markdown from 'react-markdown';

import './styles.css';
console.log('parcour list', list());

const ParcoursGallery = () => (
  <div className='parcours-gallery'>
    <h2>Parcours</h2>
    { list().map(parcour => (
      <div className='parcours-gallery__pane'>
        <h2>{ parcour.title }</h2>
        <Markdown source={parcour.description}/>
        <ArrowLink to={`parcours/${parcour.slug}`}/>
      </div>
    ))}
  </div>
);

export default ParcoursGallery;

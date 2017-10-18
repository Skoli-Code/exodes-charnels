import React from 'react';
import ArrowLink from 'components/molecules/ArrowLink';
import { list } from 'utils/parcours';
import Markdown from 'react-markdown';

import './styles.css';

const ParcoursGallery = () => (
  <div className='parcours-gallery'>
    <h2>Parcours</h2>
    <div className='parcours-gallery__panes'>
      { list().map(parcour => (
        <div className='parcours-gallery__pane'>
          <div className='parcours-gallery__pane__inner'>
            <h2>{ parcour.title }</h2>
            <Markdown source={parcour.description}/>
            <ArrowLink to={`/parcours/${parcour.slug}`}/>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ParcoursGallery;

import React from 'react';
import { resolveParcour } from 'utils/parcours';
import StoryMap from 'components/molecules/StoryMap';

const SingleParcour = ({ match }) => {
  const parcour = resolveParcour(match.params.slug);
  console.log('SingleParcour', match, parcour);
  return (
    <div>
      <h1>{ parcour.title }</h1>
      <StoryMap url={ parcour.storymap_url }/>
    </div>
  );
};

export default SingleParcour;

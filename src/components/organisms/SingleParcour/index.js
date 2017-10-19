import React from 'react';
import { resolveParcour } from 'utils/parcours';
import StoryMap from 'components/molecules/StoryMap';

const SingleParcour = ({ match }) => {
  const { slug } = match.params;
  const parcour = resolveParcour(slug);
  return (
    <div>
      <StoryMap url={ parcour.storymap_url }/>
    </div>
  );
};

export default SingleParcour;

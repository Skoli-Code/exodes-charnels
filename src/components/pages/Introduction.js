import React from 'react';

import ContentContainer from 'containers/Content'; 
import content from 'content/intro.md';
import Content from 'components/atoms/Content';
import ButtonLink from 'components/molecules/ButtonLink';
import PageTemplate from 'components/templates/PageTemplate'; 

const Introduction = () => (
  <PageTemplate>
    <ContentContainer>
      <h1>Introduction</h1>
      <Content source={content}/>
      <ButtonLink to='parcours'>Démarrer</ButtonLink>
    </ContentContainer>
  </PageTemplate>
);

export default Introduction;

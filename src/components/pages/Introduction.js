import React from 'react';

import ContentContainer from 'containers/Content'; 
import content from 'content/intro.md';
import Content from 'components/atoms/Content';
import Link from 'components/atoms/Link';
import PageTemplate from 'components/templates/PageTemplate'; 

const Introduction = () => (
  <PageTemplate>
    <ContentContainer>
      <h1>Introduction</h1>
      <Content source={content}/>
      <Link to='parcours'>Démarrer</Link>
    </ContentContainer>
  </PageTemplate>
);

export default Introduction;

import React from 'react';

import ContentContainer from 'containers/Content'; 
import content from 'content/intro.md';
import Content from 'components/atoms/Content';
import ButtonLink from 'components/molecules/ButtonLink';
import Centered from 'components/atoms/Centered';
import PageTemplate from 'components/templates/PageTemplate'; 

const Introduction = () => (
  <PageTemplate>
    <ContentContainer>
      <Content source={content}/>
      <Centered>
        <ButtonLink to='parcours'>Démarrer</ButtonLink>
      </Centered>
    </ContentContainer>
  </PageTemplate>
);

export default Introduction;

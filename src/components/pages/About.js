import React from 'react';

import PageTemplate from 'components/templates/PageTemplate'; 
import ContentContainer from 'containers/Content';
import Content from 'components/atoms/Content';

import content from 'content/about.md';

const About = () => (
  <PageTemplate>
    <ContentContainer>
      <Content source={content}/>
    </ContentContainer>
  </PageTemplate>
);

export default About;

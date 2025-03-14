import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import HomeMain from '../components/home';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home'} />
      <HomeMain />
    </Wrapper>
  );
};

export default index;
import React, { useEffect } from 'react';
import { Footer, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import AboutContact from './about-contact';
import AboutMeArea from './about-me-area';
import ExperienceArea from './experience-area';


const AboutMe = ({team}) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={team?.name ? team?.name : 'Ritarexa Diramen'} />
      <AboutMeArea team={team}/>
      <ExperienceArea/>
      <AboutContact/>
      <Footer />
    </Wrapper>
  );
};

export default AboutMe;
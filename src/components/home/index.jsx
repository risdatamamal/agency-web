import React, { useEffect } from 'react';
import { Footer, Header, Wrapper } from "../../layout";
import { animationCreate } from '../../utils/utils';
import TestimonialArea from './testimonial-area';
import AboutArea from './about-area';
import BlogArea from './blog-area';
import BrandArea from './brand-area';
import HeroArea from './hero-area';
import Industries from './industries';
import Projects from './projects';
import ServicesArea from './services-area';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <Header/>
      <HeroArea/>
      <BrandArea/>
      <ServicesArea/>
      <Industries/>
      <AboutArea/>
      <Projects/>
      <TestimonialArea button={true}/>
      <BlogArea/>
      <Footer/>
    </Wrapper>
  );
};

export default Home;
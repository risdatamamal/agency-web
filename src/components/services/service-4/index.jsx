import React, { useEffect } from 'react';
import { Footer, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import CtaTwo from '../../common/cta/cta-2';
import CaseArea from '../../common/recent-case-studies';
import TestimonialArea from '../../home/testimonial-area';
import ServicesItems from './services-items';


const ServiceFour = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'Service 04'} />
      <ServicesItems/>
      <CaseArea padd={'pt-130'} />
      <TestimonialArea style_2={true}/>
      <CtaTwo/>
      <Footer />
    </Wrapper>
  );
};

export default ServiceFour;
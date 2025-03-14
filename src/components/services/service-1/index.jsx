import React, { useEffect } from 'react';
import { Footer, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import CtaTwo from '../../common/cta/cta-2';
import CaseArea from '../../common/recent-case-studies';
import TestimonialArea from '../../home/testimonial-area';
import ServiceArea from './service-area';

const Service = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'Service 01'} />
      <ServiceArea />
      <CaseArea/>
      <TestimonialArea style_2={true}/>
      <CtaTwo/>
      <Footer />
    </Wrapper>
  );
};

export default Service;
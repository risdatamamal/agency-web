import React, { useEffect } from 'react';
import { Footer, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import JobDetailsArea from './job-details-area';




const JobDetails = ({job}) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={job?.title ? job?.title : 'Job Details'} />
      <JobDetailsArea item={job} />
      <Footer />
    </Wrapper>
  );
};

export default JobDetails;
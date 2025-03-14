import React, { useEffect } from 'react';
import { Footer, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import BlogDetailsArea from './blog-details-area';


const BlogDetails = ({blog}) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'Blog Details'} />
      <BlogDetailsArea blog={blog}/>
      <Footer />
    </Wrapper>
  );
};

export default BlogDetails;
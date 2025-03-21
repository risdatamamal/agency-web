import React from 'react';
import { useRouter } from 'next/router';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import BlogMain from '../../components/blog';

const BlogDynamicLists = () => {
  const router = useRouter();
  const {categories} = router.query;
  const blog = blog_data.find(
    (item) => String(item.categories.name) === String(categories)
  );
  return (
    <Wrapper>
      <SEO pageTitle={"Blog Lists"} />
      <BlogMain blog={blog}/>
    </Wrapper>
  );
};

export default BlogDynamicLists;

export async function getServerSideProps(context) {
  return {
      props: {},
  };
}
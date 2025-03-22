import React from 'react';
import SEO from '../../components/seo';
import { products_data } from "../../data";
import { Wrapper } from '../../layout';
import ProductsDetailsMain from '../../components/product-details';

const product_item = products_data[2];

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Product Details'} />
      <ProductsDetailsMain product={product_item}/>
    </Wrapper>
  );
};

export default index;
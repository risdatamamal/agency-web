import React from 'react';
import { products_data } from "../../data";
import ProductsItem from './products-item';

const product_items = products_data;

const ProductsArea = () => {
  return (
    <>
      <div className="tp-product-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <ProductsItem itemsPerPage={8} items={product_items} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsArea;
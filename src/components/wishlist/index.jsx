import React, { useEffect } from 'react';
import { Footer, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import WishlistArea from './wishlist-area';



const Wishlist = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'My Wishlist'} />
      <WishlistArea/>
      <Footer />
    </Wrapper>
  );
};

export default Wishlist;
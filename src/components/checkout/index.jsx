import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Footer, Header, Wrapper } from '../../layout';
import { get_cart_products } from '../../redux/features/cart-slice';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import CheckoutArea from './checkout-area';
import CouponArea from './coupon-area';



const Checkout = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
    dispatch(get_cart_products())
  }, [dispatch]);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'Checkout'} />
      <CouponArea/>
      <CheckoutArea/>
      <Footer />
    </Wrapper>
  );
};

export default Checkout;
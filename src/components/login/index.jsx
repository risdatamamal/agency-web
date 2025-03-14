import React, { useEffect } from 'react';
import { Footer, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import LoginArea from './login-area';


const Login = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      {/* <Header /> */}
      {/* <Breadcrumb title={'Login Page'} /> */}
      <LoginArea/>
      {/* <Footer /> */}
    </Wrapper>
  );
};

export default Login;
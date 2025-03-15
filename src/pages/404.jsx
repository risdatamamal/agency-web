import React from 'react';
import Breadcrumb from '../components/common/breadcrumb/breadcrumb';
import SEO from '../components/seo';
import { Footer, Header, Wrapper } from '../layout';

const ErrorPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'404 Not Found'} />
      <Header />
      {/* <Breadcrumb title={'404 Page'} back_home={true} /> */}
      <div className="tp-404-area tp-404-circle sky-bg pt-200 pb-150 fix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-404-thumb d-flex justify-content-center align-items-center z-index-1">
                <img src="/assets/img/contact/404.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </Wrapper>
  );
};

export default ErrorPage;
import React from 'react';
import useSticky from '../../hooks/use-sticky';
import Sidebar from '../../components/common/off-canvas';
import Image from 'next/image';
import Link from 'next/link';

const MobileMenu = ({ logo, bg, transparent = true }) => {
  const { headerSticky } = useSticky();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <React.Fragment>
      <div
        id="header-sticky-mobile"
        className={`tp-md-menu ${
          transparent ? "header-transparent" : ""
        } d-lg-none pt-40 pb-40 
    ${bg ? bg : ""} ${headerSticky ? "header-sticky" : ""}`}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="tp-logo">
                <Link href="/" legacyBehavior>
                  {/* <img src={`/assets/img/logo/${logo}`} alt="Logo" /> */}
                  <Image
                    src={`/assets/img/logo/${logo}`}
                    alt="Logo"
                    width={80}
                    height={80}
                    style={{ borderRadius: "10%" }}
                  />
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="bar text-end">
                <button
                  className="tp-menu-bar"
                  onClick={() => setSidebarOpen(true)}
                  type="button"
                >
                  <i className="fal fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* off canvas start */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      {/* off canvas end */}
    </React.Fragment>
  );
};

export default MobileMenu;
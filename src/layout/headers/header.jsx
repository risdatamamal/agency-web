import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFirebase from "../../hooks/use-firebase";
import useSticky from "../../hooks/use-sticky";
import { get_user } from "../../redux/features/auth-slice";
import Languages from "./component/languages";
import MobileMenu from "./mobile-menu";
import NavMenus from "./nav-menus";
import Image from "next/image";

const Header = () => {
  // headerSticky
  const { headerSticky } = useSticky();
  // user
  const { user } = useSelector((state) => state.auth);
  // firebase logout
  const { logout } = useFirebase();
  // dispatch
  const dispatch = useDispatch();
  // get_user
  useEffect(() => {
    dispatch(get_user());
  }, [dispatch]);
  
  return (
    <React.Fragment>
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className={`tp-header-area-two tp-header-bg header-transparent header-transparent-two ${
            headerSticky ? "header-sticky" : ""
          }`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3">
                <div className="tp-logo text-start">
                  <Link href="/" legacyBehavior>
                    <Image
                      src="/assets/img/logo/logo-jp.png"
                      alt="Logo"
                      width={80}
                      height={80}
                      style={{ borderRadius: "10%" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-6">
                <div className="tp-main-menu tp-menu-black tp-bs-menu tp-bp-menu text-center">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    <NavMenus />
                    {/* nav menus end */}
                  </nav>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-3 col-lg-3">
                <div className="tp-header-left d-flex align-items-center justify-content-end ">
                  <ul className="d-none d-xxl-block">
                    {!user?.email && (
                      <li>
                        <Link href="/system/auth/login" legacyBehavior>
                          <a>
                            <i className="far fa-user fa-user"></i> Login
                          </a>
                        </Link>
                      </li>
                    )}
                    {user?.email && (
                      <li>
                        <button onClick={logout} style={{ cursor: "pointer" }}>
                          <a>
                            <i className="far fa-user fa-user"></i>Logout
                          </a>
                        </button>
                      </li>
                    )}
                    {/* <li>
                      <a href="#">
                        EN<i className="fal fa-arrow-down arrow-down"></i>
                      </a>
                      <Languages />
                    </li> */}
                  </ul>
                  <div className="tp-header-yellow-button">
                    <Link href="/about" legacyBehavior>
                      <a className="tp-btn-white">How it Works</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={"logo-jp.png"} transparent={false} />
      {/* <!-- mobile-menu-area-end --> */}
    </React.Fragment>
  );
};

export default Header;

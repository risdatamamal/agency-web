import React, { useEffect } from "react";
import { Footer, Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import PortfolioItems from "./portfolio-items";

const PortfolioMain = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={"Portfolio"} />
      <PortfolioItems />
      <Footer />
    </Wrapper>
  );
};

export default PortfolioMain;

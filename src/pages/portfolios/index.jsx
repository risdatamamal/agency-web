import { Wrapper } from "../../layout";
import SEO from "../../components/seo";
import PortfolioMain from '../../components/portfolio';

export default function index() {
  
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio'} />
      <PortfolioMain/>
    </Wrapper>
  )
}

import { WELCOM_HTML_TAG_ID } from "../../constants/site.constants";
import JourneyBegins from "../../components/JourneyBegins/JourneyBegins";
// import { TSPasta } from "../../scripts/ts-pasta";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/header";
import { MirrorBG } from "../../components/MirrorBG/MirrorBG";
// import { SVGBook } from "../../components/svg/SVGBook/SVGBook";

// const tsPasta = new TSPasta({ welcomeElementId: WELCOM_HTML_TAG_ID });
// const { onHeaderClick } = tsPasta;

const Home = () => {
  return (
    <>
      <Header />
      <JourneyBegins id={WELCOM_HTML_TAG_ID} />
      {/* <SVGBook /> */}
      <NavLink to="piece">
        <Footer />
      </NavLink>
      <MirrorBG />
    </>
  );
};

export default Home;

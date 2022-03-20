import { useEffect } from "react";
// import Modal from "../../components/Modal/Modal";
// import AbsoluteCertainty from "../../components/art-pieces/AbolusteCertainty/AbsoluteCertainty";
import { WELCOM_HTML_TAG_ID } from "../../constants/site.constants";
import JourneyBegins from "../../components/JourneyBegins/JourneyBegins";
import { TSPasta } from "../../scripts/ts-pasta";
// import { poemIndex } from "../../components/art-pieces/poem-list";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/header";

// interface IHomeState {
//   showSmallPoem: boolean;
//   poemIndex: number;
// }

const tsPasta = new TSPasta({ welcomeElementId: WELCOM_HTML_TAG_ID });
const { onFooterClick, onHeaderClick } = tsPasta;

const Home = () => {
  useEffect(() => {
    // let sound = new Howl({
    //   src: ["theme.mp3"],
    //   // autoplay: true,
    // });
    // sound.play();
    // const el = document.getElementById(SPY_NAME);
    // const listener = (e: MouseEvent) => {
    //   var x = e.pageX - el!.offsetLeft;
    //   var y = e.pageY - el!.offsetTop;
    //   const msg = `We got your point number NBH${x}${Math.abs(y)}`;
    //   alert(msg);
    //   setState((state) => ({ ...state, showEphemere: false, poemIndex: 0 }));
    //   window.scrollTo(0, 1000);
    // };
    // el!.addEventListener("click", listener);
    // return () => {
    //   document.removeEventListener("click", listener);
    // };
  }, []);

  // const [state, setState] = useState<IHomeState>({
  //   showSmallPoem: false,
  //   poemIndex: -1,
  // });

  // const queryParams = new URLSearchParams(window.location.search);
  // const poem = queryParams.get("poem");
  // //@ts-ignore
  // const Poem = poemIndex[poem || "gfy"].component;

  return (
    <>
      <Header onClick={onHeaderClick} />
      <JourneyBegins id={WELCOM_HTML_TAG_ID} />
      <br />
      <br />
      <NavLink to="piece">
        <Footer />
      </NavLink>
    </>
  );
};

export default Home;

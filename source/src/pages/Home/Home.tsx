import { useEffect, useState } from "react";
import styles from "./home.module.scss";
import classnames from "classnames/bind";
import whirl from "./../../assets/images/whirl-paint.webp";
import opossum from "./../../assets/images/opossum_waves.webp";
// import { Howl } from "howler";
import Modal from "../../components/Modal/Modal";
import AbsoluteCertainty from "../../components/art-pieces/AbolusteCertainty/AbsoluteCertainty";
import { WELCOM_HTML_TAG_ID } from "../../constants/site.constants";
import JourneyBegins from "../../components/JourneyBegins/JourneyBegins";
import { TSPasta } from "../../scripts/ts-pasta";
import { poemIndex } from "../../components/art-pieces/poem-list";
import { NavLink } from "react-router-dom";

// We use ClassNames In the memory of M. the deaf goose and his carriage
const cx = classnames.bind(styles);

interface IHomeState {
  showSmallPoem: boolean;
  poemIndex: number;
}

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

  const [state, setState] = useState<IHomeState>({
    showSmallPoem: false,
    poemIndex: -1,
  });

  const queryParams = new URLSearchParams(window.location.search);
  const poem = queryParams.get("poem");
  //@ts-ignore
  const Poem = poemIndex[poem || "gfy"].component;

  return (
    <div className={cx("home")}>
      <header>
        <img src={whirl} alt="electromenagé" onClick={onHeaderClick} />
      </header>
      <JourneyBegins id={WELCOM_HTML_TAG_ID} />
      <br />
      <br />
      <NavLink to="piece">
        <footer>
          <img src={opossum} alt="hollystring" onClick={onFooterClick} />
        </footer>
      </NavLink>
      <Modal show={state.showSmallPoem}>
        <AbsoluteCertainty />
      </Modal>
    </div>
  );
};

export default Home;

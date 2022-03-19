import React, { useEffect, useState } from "react";
import styles from "./home.module.scss";
import classnames from "classnames/bind";
import whirl from "./../../assets/images/whirl-paint.webp";
import opossum from "./../../assets/images/opossum_waves.webp";
import jb007 from "./../../assets/images/jb-007.webp";
import { Howl } from "howler";
import { randomSites } from "../../assets/random-sites";
import Modal from "../../components/Modal/Modal";
import AbsoluteCertainty from "../../assets/poems/AbolusteCertainty/AbsoluteCertainty";
import { SPY_NAME } from "../../constants/site.constants";
import { poemIndex } from "../../assets/poems/poem-list";
import Carousel from "../../components/Carousel/Carousel";
import Wellcome from "../../components/Welcome/Wellcome";
import Turtoise from "../../assets/poems/Turtoise/Turtoise";

// We use ClassNames In the memory of M. the deaf goose and his carriage
const cx = classnames.bind(styles);

interface IHomeState {
  showSmallPoem: boolean;
  showEphemere: boolean;
  poemIndex: number;
}

const Home = () => {
  useEffect(() => {
    const el = document.getElementById(SPY_NAME);
    let sound = new Howl({
      src: ["theme.mp3"],
      // autoplay: true,
    });
    // sound.play();
    const listener = (e: MouseEvent) => {
      var x = e.pageX - el!.offsetLeft;
      var y = e.pageY - el!.offsetTop;
      const msg = `We got your point number NBH${x}${Math.abs(y)}`;
      alert(msg);
      setState((state) => ({ ...state, showEphemere: false, poemIndex: 0 }));
      window.scrollTo(0, 1000);
    };
    el!.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, []);

  const findTheWay = () => {};

  const [state, setState] = useState<IHomeState>({
    showSmallPoem: false,
    showEphemere: true,
    poemIndex: -1,
  });

  const onHeaderClick = () => {
    document.getElementById("journey-begin")!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const onFooterClick = () => {
    randomSites.shift();
    var item =
      randomSites[Math.floor(Math.random() * (randomSites.length - 1))];
    if (window.confirm(item.message)) {
      window.location.replace(item.url);
    } else {
      window.location.replace(item.uri);
    }
  };
  const queryParams = new URLSearchParams(window.location.search);
  const poem = queryParams.get("poem");
  //@ts-ignore
  const Poem = poemIndex[poem || "gfy"].component;
  return (
    <div className={cx("home")}>
      {state.showEphemere && (
        <>
          <header>
            <img src={whirl} alt="electromenagé" onClick={onHeaderClick} />
          </header>
          <Wellcome />
          <br />
          <br />
          <Carousel />
          <div className={cx(SPY_NAME)}>
            <img id={SPY_NAME} src={jb007} alt="jb" />
          </div>
          <div className={cx("piece")}>
            <Turtoise />
          </div>
        </>
      )}
      <br />
      {state.poemIndex !== -1 && <Poem />}
      <footer>
        <img src={opossum} alt="hollystring" onClick={onFooterClick} />
      </footer>
      <Modal show={state.showSmallPoem}>
        <AbsoluteCertainty />
      </Modal>
    </div>
  );
};

export default Home;

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
import { poemList } from "../../assets/poems/poem-list";
import Carousel from "../../components/Carousel/Carousel";
import Wellcome from "../../components/Welcome/Wellcome";

// We use ClassNames In the memory of M. the deaf goose and his carriage
const cx = classnames.bind(styles);

interface IHomeState {
  showSmallPoem: boolean;
  showEphemere: boolean;
  poemIndex: number;
}
const Home = () => {
  useEffect(() => {
    playTheme();
    addJBClickListener();
  }, []);

  const [state, setState] = useState<IHomeState>({
    showSmallPoem: false,
    showEphemere: true,
    poemIndex: -1,
  });

  const playTheme = () => {
    let sound = new Howl({
      src: ["./../../assets/music/theme.mp3"],
      autoplay: true,
    });

    sound.play();
  };

  const addJBClickListener = () => {
    const el = document.getElementById(SPY_NAME);
    el!.addEventListener("click", (e: MouseEvent) => {
      var x = e.pageX - el!.offsetLeft;
      var y = e.pageY - el!.offsetTop;
      const msg = `We got your point number NBH${x}${Math.abs(y)}`;
      alert(msg);
      setState((state) => ({ ...state, showEphemere: false, poemIndex: 0 }));
    });
  };
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
  const Poem = poemList[state.poemIndex];
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
            <>
              <h3>once upon a tortoise</h3>
              <p>
                All I need is one <br />
                one tortoise is enough <br />
                Baby you got it wrong <br />
                please turn your soul into folks
              </p>
              <p>
                We are collusion, melody contracted <br />
                The mind of young boy far a west
              </p>
              <p>
                We are fusion, melody repeated… <br />
                CleO has fever, and we turn in his head
              </p>
              <p>
                We are a union, melody weighted ! <br />
                Devs heads and the songs of sirens
              </p>
              <p>
                We are completion, melody blended <br />
                By the nil being highlighted
              </p>
              <p>
                "Four living pillars that often lie."
                <br />
                "On top of the Tortoise galactic ride."
                <br />
                "Holy bath in the dessert you may find"
              </p>
              <p>
                Witch is conspiration, melody hacked
                <br />
                Might us know everything. Solution for the rest
              </p>
              <p>
                We are misconception, you are the problem <br />
                Simple melody, that digs in our heads
              </p>
              <p>
                Let’s break this chain, make it an dote <br />I beg you join we
                in the Barbapapote
              </p>
              <p>We just melody and only you only got</p>
              <p>
                May you find your tortoise and go through the extreme
                <br />
                God will your sacrifice it might be rewarded <br />
                <br />
                Just for the livings and living for the justs <br />
                prettiest of the meme to misleading emblem <br />
                It will be good enough will be the Farce
              </p>
            </>
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

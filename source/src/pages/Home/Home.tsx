import styles from "./home.module.scss";
import classnames from "classnames/bind";
import pic1 from "./../../assets/images/pictograms/pseudAnonym1.png";
import pic2 from "./../../assets/images/pictograms/pseudAnonym2.png";
import pic3 from "./../../assets/images/pictograms/pseudAnonym3.png";
import pic4 from "./../../assets/images/pictograms/pseudAnonym4.png";
import pic5 from "./../../assets/images/pictograms/pseudAnonym5.png";
import pic6 from "./../../assets/images/pictograms/pseudAnonym6.png";
import pic7 from "./../../assets/images/pictograms/pseudAnonym7.png";
import whirl from "./../../assets/images/whirl.webp";
import opossum from "./../../assets/images/opossum.webp";
import jbTest from "./../../assets/images/jb-test.png";

// We use ClassNames In the memory of M. the deaf goose and his carriage
const cx = classnames.bind(styles);

const Home = () => {
  const onHeaderClick = () => {
    document.getElementById("journey-begin")!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const onFooterClick = () => {
    alert("tg");
  };
  return (
    <div className={cx("home")}>
      <header>
        <img src={whirl} alt="electromenagé" onClick={onHeaderClick} />
      </header>
      <section id="journey-begin">
        <h3>Hello Wellcomer ! Who are you know ?</h3>
        <p>
          We are a collision of artists who stroke the beat inadvertetly to
          contract a rare melody. Enjoy ! denouce and debounce ! Certainly balls
          allways roll down from top to bottom. <br />
          The trust is one thing and the others are rather's layers king. In any
          kind of logic you'll find piece of peaces and facilities. What we have
          is precious. We have, we'll always have what it takes and makes to
          find them all.
          <br />
          Feel them and live it once for all.
        </p>
      </section>
      <br />
      <br />
      <section id="slideshow" className={cx("slideshow")}>
        <div className={cx("entire-content")}>
          <div className={cx("content-carrousel")}>
            <figure className={cx("shadow")}>
              <img src={pic2} alt="pictanonym2"></img>
            </figure>
            <figure className={cx("shadow")}>
              <img src={pic3} alt="pictanonym3"></img>
            </figure>
            <figure className={cx("shadow")}>
              <img src={pic4} alt="pictanonym4"></img>
            </figure>
            <figure className={cx("shadow")}>
              <img src={pic5} alt="pictanonym5"></img>
            </figure>
            <figure className={cx("shadow")}>
              <img src={pic6} alt="pictanonym6"></img>
            </figure>
            <figure className={cx("shadow")}>
              <img src={pic7} alt="pictanonym7"></img>
            </figure>
            <figure className={cx("shadow")}>
              <img src={pic1} alt="pictanonym1"></img>
            </figure>
            <figure className={cx("shadow")}>
              <img src={pic3} alt="pictanonym3"></img>
            </figure>
            <figure className={cx("shadow")}>
              <img src={pic4} alt="pictanonym4"></img>
            </figure>
          </div>
        </div>
      </section>
      <div className={cx("jb")}>
        <img src={jbTest} alt="jb" />
      </div>
      <div>
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
          Let’s break this chain, make it an dote <br />I beg you join we in the
          Barbapapote
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
      </div>
      <div className={cx("divider")}>***</div>
      {/* <div>
        <p className="interlude">
          My small channel I love, all begins with the Saints
          <br />
          don't you know the story where you may learn and see <br />
          how best men can ignore what's in front of their sight
          <br />
          the fortunate of you will enjoy probably <br />
          the abridged version is a way nicer flight
        </p>
        <div className={cx("divider")}>***</div>
        <p>
          I've lost my balls somewhere in dishes <br />
          It smells like fish in my blue underwear <br /> Go find them all to
          fullfill your wishes <br /> You'll see the Dragon flying in the air
        </p>
      </div> */}
      <br />
      <br />
      <br />
      <footer>
        <img src={opossum} alt="hollystring" onClick={onFooterClick} />
      </footer>
    </div>
  );
};

export default Home;

import styles from "./hello-nature.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const HelloNature = () => {
  return (
    <div className={cx("i-had-a-dream")}>
      <h3>HELLO NATURE</h3>
      Hello, Nature. Can I tell them? Can I whisper to their ears? <br />
      All your words echoed in silence that they seldom even hear.
      <br />
      You're the beauty that surrounds us, you're the greatest piece of art.
      <br />
      In your leaves are hidden mysteries, long before we had a start.
      <br />
      How beautiful you are, when oceans dance under the waves.
      <br />
      Oh! How majestic you are, when the mountains tell your tales.
      <br />
      <br />
      Hello, Nature. Can I tell them? Can I sing your praise all day?
      <br />
      Till the stars blanket the night and the skies are patched with gray.
      <br />
      Till the lions give their roar and their cubs run to the call.
      <br />
      Till my yonder is all gone and my heart cannot recall.
      <br />
      And even though we always hurt you, you forgive and always give.
      <br />
      You're the calmness that we breathe and without you, can we live
      <br />
      <br />
      <p>
        Poetry by <a href="https://www.fiverr.com/jasonenukora">jasonenukora</a>
      </p>
    </div>
  );
};

export default HelloNature;

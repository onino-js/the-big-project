import styles from "./we-can.module.scss";
import classnames from "classnames/bind";
import shyriu from "./../../../assets/images/shyriu.jpg";

const cx = classnames.bind(styles);

const WeCan = () => {
  return (
    <div className={cx("we-can")}>
      <img src={shyriu} alt="saint seiya illustration from graphicsarc" />
      <h3>CAN YOU?</h3>
      Can you look beyond the things you see?
      <br />
      Through the eyes not with the eyes?
      <br />
      Can you glimpse the person you can be?
      <br />
      And grasp the truth beyond the lies?
      <br />
      <br />
      Can you leave the past and embrace the now?
      <br />
      Taking charge of your space and time?
      <br />
      Can you move ahead and take a vow
      <br />
      To let go and make the climb?
      <br />
      <br />
      Can you accept yourself the way you are?
      <br />
      Align yourself with the universe.
      <br />
      Can you see your beauty from afar?
      <br />
      With paint and brush, you create your verse.
      <br />
      <br />
      Can you rise above sensations and emotions?
      <br />
      Be detached yet still attached?
      <br />
      Can you be wild yet calm like the oceans?
      <br />
      Respond to life and become unmatched.
      <br />
      <br />
      I can be. Yes, I can be.
      <br />
      I can rise beyond my past and live.
      <br />
      I can be. Yes, I can be.
      <br />
      I can be whatever I believe.
      <br />
      <br />
      ***
      <br />
      <p>
        Poetry by <a href="https://www.fiverr.com/jasonenukora">jasonenukora</a>
      </p>
      <p>
        Illustration by{" "}
        <a href="https://www.fiverr.com/graphicsarc?source=inbox">
          grapgicsart
        </a>
      </p>
      <br />
      ***
    </div>
  );
};

export default WeCan;

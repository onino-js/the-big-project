import React from "react";
import styles from "./home.module.scss";
import classnames from "classnames/bind";

// We use ClassNames In the memory of M. the deaf goose and his carriage
const cx = classnames.bind(styles);
// May it works one day

const Home = () => {
  return (
    <div className={cx("home")}>
      <iframe
        title="who knows"
        id="ytplayer"
        //@ts-ignore
        type="text/html"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/v=FOMZ_eHUCHE?autoplay=1"
        frameborder="0"
      />
    </div>
  );
};

export default Home;

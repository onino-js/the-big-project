import styles from "./mirror-bg.module.scss";
import classnames from "classnames/bind";
import mirrorBG from "./../../assets/images/round-mirror-bg.jpg";
import { useEffect } from "react";

const cx = classnames.bind(styles);
const IMAGE_MIRROR_ID = "mirror-id";

export const MirrorBG: React.FC = () => {
  useEffect(() => {
    const scrollRotate = () => {
      let image = document.getElementById(IMAGE_MIRROR_ID)!;
      image.style.transform = "rotate(" + window.pageYOffset / 5 + "deg)";
    };
    window.addEventListener("scroll", scrollRotate);
    return () => window.removeEventListener("scroll", scrollRotate);
  }, []);

  return (
    <div className={cx("mirror-bg")}>
      <img src={mirrorBG} alt="end of the journey" id={IMAGE_MIRROR_ID} />
    </div>
  );
};

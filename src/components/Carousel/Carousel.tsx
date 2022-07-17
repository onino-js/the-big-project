import styles from "./carousel.module.scss";
import classnames from "classnames/bind";
import pictoIndex from "../../assets/images/pictograms/pictogram-index";
import { CAROUSEL_LENGTH } from "../../constants/site.constants";

const cx = classnames.bind(styles);

const Carousel = () => {
  return (
    <section id="slideshow" className={cx("slideshow")}>
      <div className={cx("entire-content")}>
        <div className={cx("content-carrousel")}>
          {new Array(CAROUSEL_LENGTH).fill(0).map((d, i) => (
            <figure key={`pseudo-anonym-${i}`} className={cx("shadow")}>
              <img src={pictoIndex[i]} alt={`pseudo-anonym-${i}`}></img>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;

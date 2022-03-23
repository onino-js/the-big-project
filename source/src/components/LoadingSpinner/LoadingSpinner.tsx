import styles from "./mirror-bg.module.scss";
import classnames from "classnames/bind";
import mirrorBG from "./../../assets/images/round-mirror-bg.jpg";

const cx = classnames.bind(styles);
const LOADING_SPINNER_ID = "loading-spinner-id";

export const LoadingSpinner: React.FC = () => {
  return (
    <div className={cx("mirror-bg")}>
      <img src={mirrorBG} alt="loading-spinner" id={LOADING_SPINNER_ID} />
    </div>
  );
};

import styles from "./home.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const Piece = () => {
  return <div className={cx("piece")}></div>;
};

export default Piece;

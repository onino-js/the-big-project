import styles from "./header.module.scss";
import classnames from "classnames/bind";
import whirl from "./../../assets/images/whirl-paint.webp";

const cx = classnames.bind(styles);

const Header: React.FC<React.HTMLAttributes<HTMLHeadElement>> = (props) => (
  <header className={cx("header")} {...props}>
    <img src={whirl} alt="electromenagé" />
  </header>
);

export default Header;

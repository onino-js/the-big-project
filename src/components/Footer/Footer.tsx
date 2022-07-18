import styles from "./footer.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export const Footer: React.FC<React.HTMLAttributes<HTMLBaseElement>> = (props) => (
  <footer className={cx("footer")} {...props}>
    <a href="about">About us</a>
    <a href="poetey">Poetry</a>
    <a href="illustrations">Illustrations</a>
  </footer>
);

export default Footer;

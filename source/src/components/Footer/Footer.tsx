import styles from "./footer.module.scss";
import classnames from "classnames/bind";
import opossum from "./../../assets/images/opossum_waves.webp";

const cx = classnames.bind(styles);

const Footer: React.FC<React.HTMLAttributes<HTMLBaseElement>> = (props) => (
  <footer className={cx("footer")} {...props}>
    <img src={opossum} alt="hollystring" />
  </footer>
);

export default Footer;

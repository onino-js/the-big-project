import styles from "./footer.module.scss";
import classnames from "classnames/bind";
import opossum from "./../../assets/images/opossum_waves.webp";
import { getPoople } from "../../scripts/reward";

const cx = classnames.bind(styles);

const Footer: React.FC<React.HTMLAttributes<HTMLBaseElement>> = (props) => (
  <footer className={cx("footer")} {...props}>
    <img src={opossum} alt="hollystring" onClick={getPoople} />
  </footer>
);

export default Footer;

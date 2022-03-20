import styles from "./piece.module.scss";
import classnames from "classnames/bind";
import { SPY_NAME } from "../../constants/site.constants";
import jb007 from "./../../assets/images/jb-007.webp";
import Turtoise from "../../components/art-pieces/Turtoise/Turtoise";

const cx = classnames.bind(styles);

export const Piece: React.FC = () => (
  <div className={cx("piece")}>
    <div className={cx(SPY_NAME)}>
      <img id={SPY_NAME} src={jb007} alt="jb" />
    </div>
    <Turtoise />
  </div>
);

import styles from "./piece.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

interface IPieceProps {
  //   children: React.ReactNode;
}

const Piece: React.FC<IPieceProps> = ({ children }) => {
  return <section className={cx("piece")}>{children}</section>;
};

export default Piece;

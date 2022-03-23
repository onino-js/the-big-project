import styles from "./inventory.module.scss";
import classnames from "classnames/bind";
import { NavLink } from "react-router-dom";
import { artPieceList } from "../../components/art-pieces/art-piece-index";
import Footer from "../../components/Footer/Footer";

const cx = classnames.bind(styles);

export const Inventory: React.FC = () => {
  return (
    <>
      <div className={cx("inventory")}>
        <h3>Poem index</h3>
        {artPieceList.map((d, i) => (
          <NavLink to={`/piece?truth=${d.url}`}>{d.title}</NavLink>
        ))}
        <br />
        <br />
        <NavLink to="/">Back home</NavLink>
      </div>
      <Footer />
    </>
  );
};

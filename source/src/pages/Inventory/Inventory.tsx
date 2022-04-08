import styles from "./inventory.module.scss";
import classnames from "classnames/bind";
import { NavLink } from "react-router-dom";
import { artPieceList } from "../../components/art-pieces/art-piece-index";
// import Footer from "../../components/Footer/Footer";

const cx = classnames.bind(styles);

export const Inventory: React.FC = () => {
  return (
    <>
      <div className={cx("inventory")}>
        {/* <h3>Inventory</h3> */}
        <NavLink to={`/piece?truth=${artPieceList[0].url}`}>
          {artPieceList[0].title}
        </NavLink>
        <br />
        {artPieceList
          .filter((d, i) => i !== 0)
          .filter((d, i) => i !== artPieceList.length - 2)
          .map((d, i) => (
            <NavLink to={`/piece?truth=${d.url}`}>{d.title}</NavLink>
          ))}
        <br />
        <NavLink
          to={`/piece?truth=${artPieceList[artPieceList.length - 1].url}`}
        >
          {artPieceList[artPieceList.length - 1].title}
        </NavLink>
        <br />
        {/* <h3>Poèmes en français</h3>
        {artPieceList
          .filter((d, i) => d.language === "fr")
          .map((d, i) => (
            <NavLink to={`/piece?truth=${d.url}`}>{d.title}</NavLink>
          ))}
        <br /> */}
        {/* <NavLink to="/">Back home</NavLink> */}
      </div>
      {/* <Footer /> */}
    </>
  );
};

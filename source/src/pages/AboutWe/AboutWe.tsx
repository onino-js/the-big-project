import styles from "./about-we.module.scss";
import classnames from "classnames/bind";
import pictoIndex from "../../assets/images/pictograms/pictogram-index";
import { NavLink } from "react-router-dom";

const cx = classnames.bind(styles);

export const AboutWe: React.FC = () => (
  <section className={cx("about-we")}>
    <h2>Know here we are</h2>
    <div className={cx("pictoanonym-grid")}>
      {pictoIndex.map((d, i) => (
        <img src={d} />
      ))}
    </div>
    <NavLink to="/">
      <h1>Back</h1>
    </NavLink>
  </section>
);

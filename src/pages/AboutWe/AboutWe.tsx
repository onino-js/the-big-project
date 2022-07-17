import styles from "./about-we.module.scss";
import classnames from "classnames/bind";
import pictoIndex from "../../assets/images/pictograms/pictogram-index";
// import { NavLink } from "react-router-dom";

const cx = classnames.bind(styles);

export const AboutWe: React.FC = () => (
  <section className={cx("about-we")}>
    <h4>And here we are now</h4>
    <p>(Sorry for all artists we couldn't represented)</p>
    <br />
    {/* <h2>Here we are now</h2> */}
    <div className={cx("pictoanonym-grid")}>
      {pictoIndex.map((d, i) => (
        <img src={d} alt={`pictoanonym-${i}`} />
      ))}
    </div>
    <br />
    {/* <NavLink to="/">
      <h1>Back</h1>
    </NavLink> */}
  </section>
);

import styles from "./journey-begins.module.scss";
import classnames from "classnames/bind";
// import { NavLink } from "react-router-dom";

const cx = classnames.bind(styles);

const DEFAULT_ID = "journey begins default id";

interface IJourneyBeginsProps {
  id?: string;
}

const JourneyBegins: React.FC<IJourneyBeginsProps> = ({ id = DEFAULT_ID }) => {
  return (
    <section className={cx("journey-begins")} id={id}>
      <h1 id="test">Wellcome traveller !</h1>
      <p>
        We are a collision of artists who stroke the beat inadvertetly and
        contracted a rare melody. <br />
        Enjoy ! denouce and debounce ! <br />
        Certainly balls allways roll down from top to bottom. <br />
        The trusth is one thing and the others are rather's layers king. <br />
        In any kind of logic you'll find piece of peaches and facilities. <br />
        What we have is precious. We have, we'll always have what it takes and
        makes to find them all.
        <br />
        Feel them and live it once for all.
      </p>
      {/* <NavLink to="inventory">To the inventory</NavLink> */}
    </section>
  );
};

export default JourneyBegins;

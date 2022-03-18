import styles from "./wellcome.module.scss";
import classnames from "classnames/bind";

// We use ClassNames In the memory of M. the deaf goose and his carriage
const cx = classnames.bind(styles);

const Wellcome = () => {
  return (
    <section className={cx("journey-begin")} id={"journey-begin"}>
      <h3>Hello Wellcomer ! Who are you know ?</h3>
      <p>
        We are a collision of artists who stroke the beat inadvertetly and
        contracted a rare melody. <br />
        Enjoy ! denouce and debounce ! <br />
        Certainly balls allways roll down from top to bottom. <br />
        The trust is one thing and the others are rather's layers king. In any
        kind of logic you'll find piece of peaces and facilities. What we have
        is precious. We have, we'll always have what it takes and makes to find
        them all.
        <br />
        Feel them and live it once for all.
      </p>
    </section>
  );
};

export default Wellcome;

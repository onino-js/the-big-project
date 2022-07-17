import styles from "./header.module.scss";
import classnames from "classnames/bind";
import whirl from "./../../assets/images/whirl-paint.webp";
import { BreveModal } from "../BreveModal/BreveModal";
import { useState } from "react";

const cx = classnames.bind(styles);

const Header: React.FC<React.HTMLAttributes<HTMLHeadElement>> = (props) => {
  const [state, setState] = useState({
    showBreve: false,
  });
  const showBreve = () => setState({ showBreve: true });
  const closeBreve = () => {
    setState({ showBreve: false });
  };
  return (
    <>
      <header className={cx("header")} {...props}>
        <img src="banner.jpg" alt="electromenagé" onClick={showBreve} />
      </header>
      <BreveModal show={state.showBreve} close={closeBreve} />
    </>
  );
};

export default Header;

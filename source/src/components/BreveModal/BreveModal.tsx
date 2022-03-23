import styles from "./breve-modal.module.scss";
import classnames from "classnames/bind";
import Modal, { IModalProps } from "../modal/Modal";
import mirrorBG from "./../../assets/images/mirror.png";
import { breves } from "../../assets/breves/breves";

const cx = classnames.bind(styles);

export const BreveModal: React.FC<IModalProps> = (props) => {
  return (
    <Modal
      {...props}
      rootStyle={{ backgroundColor: "transparent" }}
      style={{
        backgroundColor: "transparent",
        boxShadow: "none",
        width: "700px",
        position: "relative",
      }}
      className={cx("breve-modal")}
    >
      {breves[0].map((d, i) => (
        <p key={`breve-ver-${i}`}>{d}</p>
      ))}
      <img src={mirrorBG} alt="ricked mirror" />
    </Modal>
  );
};

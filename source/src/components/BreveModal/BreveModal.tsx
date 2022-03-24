import styles from "./breve-modal.module.scss";
import classnames from "classnames/bind";
import Modal, { IModalProps } from "../modal/Modal";
import mirrorBG from "./../../assets/images/mirror.jpg";
import { breves } from "../../assets/breves/breves";
import TSPasta from "../../scripts/ts-pasta";

const cx = classnames.bind(styles);

export const BreveModal: React.FC<IModalProps> = (props) => {
  const breve: string[] = TSPasta.sample(breves);
  return (
    <Modal
      {...props}
      //rootStyle={{ backgroundColor: "transparent" }}
      style={{
        // backgroundColor: "transparent",
        boxShadow: "none",
        width: "700px",
        position: "relative",
      }}
      className={cx("breve-modal")}
      onClick={props.close}
    >
      {breve.map((d, i) => (
        <p key={`breve-ver-${i}`}>{d}</p>
      ))}
      <img onClick={props.close} src={mirrorBG} alt="ricked mirror" />
    </Modal>
  );
};

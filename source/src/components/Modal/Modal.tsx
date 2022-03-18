import styles from "./Modal.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export interface IModalMotherFuckingProps {
  show: boolean;
  close?: () => void;
}

const Modal: React.FC<IModalMotherFuckingProps> = ({
  show,
  children,
  close,
}) => {
  return (
    <div className={cx("modal", { show })}>
      <div className={cx("modal-content")}>
        {/* <img src={owlHead} className={cx("close-owl")} /> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;

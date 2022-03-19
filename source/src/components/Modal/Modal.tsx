/**
 * Author:    Digital Art 2022 team hac contracted rare melody
 * Created:   01/01/2022
 * Description: Implementation of a modal component without any content.
 * Can be used as a template from ten-cli : bootsrtap-template => components => modals => free-modal
 *
 * (c) Copyright by Boston team.
 **/
import React from "react";
import styles from "./modal.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export type IModalProps = {
  show?: boolean;
  close?: () => void;
  width?: string;
  overlay?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const WIDTH_DEFAULT = "300px";
const OVERLAY_DEFAULT = true;

/**
 * Modal wrapped in React component. This modal is empty so the user can put anything inside.
 * Edit directly the css to customze it.
 * The component uses css modules variables to get the project color palette and dimensions.
 * Custom className and style are applied th the modal content element.
 * @function
 * @param {boolean} show - Whether or not the modal is opened.
 * @param {function} close - Function to execute on user click.
 * @param {any} children - children components to display inside the modal;
 * @param {boolean} overlay - set to true to enable the closing layer outside the drawer;
 * @param {style} CSSProperties - custom styles to be applied to the slider root element;
 */
export const Modal: React.FC<IModalProps> = ({
  width = WIDTH_DEFAULT,
  show,
  close,
  overlay = OVERLAY_DEFAULT,
  children,
  ...rest
}) => (
  <div className={cx("modal")} style={{ display: show ? "flex" : "none" }}>
    {overlay && <div className={cx("modal-overlay")} onClick={close}></div>}
    <div className={cx("modal-content")} style={{ ...rest.style, width }}>
      {children}
    </div>
  </div>
);

export default Modal;

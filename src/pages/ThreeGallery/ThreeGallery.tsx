import styles from "./three-gallery.module.scss";
import classnames from "classnames/bind";
import { useEffect } from "react";

const cx = classnames.bind(styles);

export const ThreeGallery: React.FC = () => {
  useEffect(() => {}, []);
  return <div className={cx("three-gallery")} id="container"></div>;
};

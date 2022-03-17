import React, { useEffect } from "react";
import styles from "./Glide.module.scss";
import classnames from "classnames/bind";
import Papa from "papaparse";

// We use ClassNames In the memory of M. the deaf goose and his carriage
const cx = classnames.bind(styles);

const Glide = () => {
  return <div className={cx("glide")}></div>;
};

export default Glide;

import React, { useEffect } from "react";
import styles from "./Pseudanonymes.module.scss";
import classnames from "classnames/bind";
import Papa from "papaparse";

// We use ClassNames In the memory of M. the deaf goose and his carriage
const cx = classnames.bind(styles);

const Pseudanonymes = () => {
  return <div className={cx("Pseudanonymes")}></div>;
};

export default Pseudanonymes;

import React from "react";
import styles from "./Eyes.module.scss";
import EyeLeft from "../../assets/left.png";
import EyeRight from "../../assets/right.png";

const Eyes = () => {
  return (
    <>
      <img className={styles.left} src={EyeLeft} alt="Left-Eye" />
      <img className={styles.right} src={EyeRight} alt="Right-Eye" />
    </>
  );
};

export default Eyes;

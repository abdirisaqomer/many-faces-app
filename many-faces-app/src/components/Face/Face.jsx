import React from "react";
import { useState } from "react";
import styles from "./Face.module.scss";
import Eyes from "../Eyes/Eyes";

const Face = props => {
  const { image } = props;
  const [eyesLevel, rotateEyes] = useState(true);
  const spinEyes = eyesLevel ? null : styles.rotate;
  return (
    <>
      <div
        className={`${spinEyes} ${styles.faceCard}`}
        onClick={() => rotateEyes(!eyesLevel)}
      >
        <img className={spinEyes} src={image} alt={image} />
        <Eyes />
      </div>
    </>
  );
};
export default Face;

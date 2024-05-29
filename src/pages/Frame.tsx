import { FunctionComponent } from "react";
import styles from "./Frame.module.css";

const Frame: FunctionComponentFrameType = () => {
  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <div className={styles.dropdown}>
        <div className={styles.menuBackground} />
        <a className={styles.explore}>Explore</a>
      </div>
    </div>
  );
};

export default Frame;

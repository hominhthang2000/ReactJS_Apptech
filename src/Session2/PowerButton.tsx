import React from "react";
import styles from "./PowerButton.module.css";
type Props = {
  status?: "on" | "off";
};

export default function PowerButton({ status = "on" }: Props) {
  // let style = styles.onButton;
  // if (status == "off") {
  //   style = styles.offButton;
  // }
  return (
    <div className={styles.container}>
      <div
        className={status == "on" ? styles.onButton : styles.offButton}
      ></div>
    </div>
  );
}

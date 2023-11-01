import React from "react";
import styles from "./CheckButton.module.css";
import { BsCheckLg } from "react-icons/bs";
import classnames from "classnames";
type Props = {};

export default function CheckButton({}: Props) {
  const [status, setStatus] = React.useState<"on" | "off">("on");
  const toggleStatus = () => {
    setStatus(status == "on" ? "off" : "on");
  };
  return (
    <div
      className={classnames(
        styles.container,
        status == "on" ? styles.on : styles.off
      )}
      onClick={toggleStatus}
    >
      <div
        className={classnames(
          styles.button,
          status == "on" ? styles.on : styles.off
        )}
      >
        <BsCheckLg className={styles.icon} />
      </div>
    </div>
  );
}

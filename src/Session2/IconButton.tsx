import React from "react";
import style from "./Icon.module.css";
type Props = {
  text?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

export default function IconButton({
  text = "Button text",
  iconLeft,
  iconRight,
}: Props) {
  return (
    <div className={style.container}>
      <div className={style.buttonText}>
        {iconLeft && <div className={style.leftIcon}>{iconLeft}</div>}
        <div style={{ flex: 1 }}>{text}</div>
        {iconRight && <div className={style.rightIcon}>{iconRight}</div>}
      </div>
    </div>
  );
}

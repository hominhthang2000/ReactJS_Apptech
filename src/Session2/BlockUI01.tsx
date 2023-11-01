import React from "react";
import styles from "./BlockUI01.module.css";
type Props = {
  title?: string;
  colorDark?: string;
  colorLight?: string;
  precentage?: number;
};
function Bar({
  title = "No Name",
  colorDark = "#E54D4C",
  colorLight = "#F75354",
  precentage = 0,
}: Props) {
  return (
    <div className={styles.barContainer}>
      <div className={styles.leftColum} style={{ background: colorDark }}>
        <span>{title}</span>
      </div>
      <div className={styles.rightColum}>
        <div
          className={styles.precentageBar}
          style={{ width: precentage + "%", background: colorLight }}
        >
          <span>{precentage}%</span>
        </div>
      </div>
    </div>
  );
}
export default function BlockUI01({}: Props) {
  return (
    <div>
      <Bar
        title="BANDWIDTH"
        precentage={20}
        colorDark="E54D4C"
        colorLight="#F65250"
      />
      <Bar
        title="STORAGE"
        precentage={50}
        colorDark="#22bbcb"
        colorLight="#31c8dd"
      />
      <Bar
        title="USER"
        precentage={70}
        colorDark="#4ac25e"
        colorLight="#77d192"
      />
      <Bar
        title="VISITORS"
        precentage={30}
        colorDark="#e9c318"
        colorLight="#fcd518"
      />
      <Bar
        title="Email"
        precentage={80}
        colorDark="#bb70d5"
        colorLight="#cb79e7"
      />
      <Bar
        title="BASIC"
        precentage={40}
        colorDark="#eb59d6"
        colorLight="#ff5fe6"
      />
      <Bar
        title="OTHERS"
        precentage={37}
        colorDark="#5890da"
        colorLight="#619cec"
      />
    </div>
  );
}

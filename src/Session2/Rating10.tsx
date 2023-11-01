import React from "react";
import styles from "./Rating10.module.css";
import { FaStarHalf } from "react-icons/fa";

type Props = {
  starts?: number;
};

export default function Rating10({ starts = 0 }: Props) {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
        return (
          <span
            key={index}
            style={{ color: starts >= item ? "orange" : "gray" }}
          >
            <FaStarHalf
              className={item % 2 == 0 ? styles.starRight : styles.starLeft}
            />
          </span>
        );
      })}
    </div>
  );
}

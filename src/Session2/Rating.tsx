import React from "react";

type Props = {
  starts?: number;
};

export default function Rating({ starts = 0 }: Props) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <span
            key={index}
            style={{ color: starts >= item ? "orange" : "gray" }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

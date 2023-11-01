import React from "react";

type Props = {
  value?: number;
};

export default function Percentage({ value = 0 }: Props) {
  return (
    <div>
      <div style={{ width: 200, height: 20, background: "gray" }}>
        <div
          style={{ width: `${value}%`, height: 20, background: "orange" }}
        ></div>
      </div>
    </div>
  );
}

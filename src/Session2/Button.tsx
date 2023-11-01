import React from "react";
import { text } from "stream/consumers";
import { FaBeer } from "react-icons/fa";

type Props = {
  text?: string;
  color?: string;
  icon?: React.ReactNode;
};

export default function Button({
  text = "Butoon text",
  color = "#e74c3c",
  icon = "",
}: Props) {
  return (
    <div
      style={{
        height: 48,
        width: 120,
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: 20,
        borderRadius: 8,
        marginBottom: 20,
      }}
    >
      {icon && <div style={{ marginRight: 8 }}>{icon}</div>}
      {text}
    </div>
  );
}

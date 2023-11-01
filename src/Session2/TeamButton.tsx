import React from "react";
import second from "./TeamButton.module.css";

type Props = {
  title?: string;
  subTitle?: string;
  imgUrls?: string[];
  backgroundColor?: string;
  colortext?: string;
};
export default function TeamButton({
  title = "No Name",
  subTitle = "",
  imgUrls = [],
  backgroundColor = "",
  colortext = "",
}: Props) {
  return (
    <div
      className={second.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={second.avatarcontainer}>
        {imgUrls.map((item, index) => {
          return (
            <div
              key={index}
              className={second.avatar}
              style={{ borderColor: backgroundColor }}
            >
              <img src={item} />
            </div>
          );
        })}
      </div>
      <div className={second.contentcontainer}>
        <span className={second.title} style={{ color: colortext }}>
          {title}
        </span>
        <span className={second.subTitle} style={{ color: colortext }}>
          {subTitle}
        </span>
      </div>
    </div>
  );
}

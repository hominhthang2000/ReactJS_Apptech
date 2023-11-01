import React from "react";
import styles from "./Gallery.module.css";
type Props = {};
const maxImage = 4;
export default function Gallery({}: Props) {
  const [index, setIndex] = React.useState(1);
  let imagePath = "/Images/" + index + ".jpeg";
  return (
    <div className={styles.container}>
      <img className={styles.img} src={imagePath} alt="" />
      <div className={styles.button}>
        <button
          disabled={index == 1}
          // style={{ backgroundColor: index == 1 ? "gray" : "#9b59b6" }}
          className={styles.buttonChildren}
          onClick={() => {
            setIndex(index == 1 ? 4 : index - 1);
          }}
        >
          Previous
        </button>
        <div>
          {index}/{maxImage}
        </div>
        <button
          //   disabled={index == 4}
          // style={{ backgroundColor: index == 4 ? "gray" : "#9b59b6" }}
          className={styles.buttonChildren}
          onClick={() => {
            setIndex(index == 4 ? 1 : index + 1);

            console.log(index);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// import React ,}from "react";
import React from "react";
import styles from "./Counter.module.css";
type Props = {};

export default function Demo({}: Props) {
  //let count = 0;
  const [count, setCount] = React.useState(11);
  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log("Count", count);
        }}
      >
        UP
      </button>
      <strong>Count: {count} </strong>
      <button
        onClick={() => {
          setCount(count - 1);

          console.log("Count", count);
        }}
      >
        Dow
      </button>
    </div>
  );
}

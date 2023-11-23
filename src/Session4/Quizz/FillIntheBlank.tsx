import React from "react";
import styles from "./FillInTheBlank.module.css";
type Props = { questionContent?: string; correctAnswers: string };
export default function FillIntheBlank({
  questionContent,
  correctAnswers,
}: Props) {
  const [userAnsewrs, setUserAnsewrs] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnsewrs(event.target.value);
  };
  const handleClick = () => {
    if (
      userAnsewrs.toLocaleLowerCase() === correctAnswers?.toLocaleLowerCase()
    ) {
      alert("Chính xác");
    } else {
      alert("Chưa chính xác");
    }
  };
  const text = questionContent?.split(/(___)/g);
  return (
    <div className={styles.container}>
      <h3 className="text-xl font-semibold ">Fill in the blank</h3>
      <hr />
      <div className="flex mt-5">
        {text?.map((item, index) => {
          if (item === "___") {
            return (
              <div key={index}>
                <input
                  className="border-dashed border-2 border-indigo-600 mr-1 ml-1 min-w-[30px] "
                  style={{
                    minWidth: 30,
                    width: correctAnswers.length * 15,
                    maxWidth: 400,
                    fontSize: 20,
                  }}
                  autoComplete="off"
                  onChange={handleChange}
                ></input>
              </div>
            );
          }
          return <span key={index}>{item}</span>;
        })}
      </div>
      <button
        className="mt-5 bg-green-700 h-[35px] w-[80px] rounded text-lg font-bold
      "
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

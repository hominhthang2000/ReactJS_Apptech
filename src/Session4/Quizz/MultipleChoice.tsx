import React from "react";
import styles from "./MultipleChoice.module.css";
type Props = {
  questionContent?: string;
  answers?: string[];
  correctAnswers?: string[];
};
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];
export default function MultipleChoice({
  questionContent,
  answers,
  correctAnswers,
}: Props) {
  // user answer
  const [userAnswers, setUserAnswers] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.checked);
    // console.log(event.target.value);

    if (event.target.checked) {
      setUserAnswers([...userAnswers, event.target.value]);
    } else {
      setUserAnswers(
        userAnswers.filter((answer) => answer !== event.target.value)
      );
    }
  };

  const handleClick = () => {
    console.log(userAnswers);

    // compare 2 arrays, if they are the same, then correct
    if (userAnswers.length !== correctAnswers?.length) {
      alert("Wrong");
      return;
    }
    //Every là mỗi phần tử bên này đều bằng bên kia, include là để kiểm tra xem 1 phàn tử có nằm trong 1 mảng k
    if (userAnswers.every((answer) => correctAnswers?.includes(answer))) {
      alert("Correct");
    } else {
      alert("Wrong");
    }
  };
  return (
    <div className={styles.container}>
      <h3>{questionContent}</h3>
      <hr />
      <div className={styles.answers}>
        {answers?.map((answer, index) => (
          <div className={styles.answer} key={index}>
            <input
              type="checkbox"
              name={questionContent}
              value={answer}
              autoComplete="off"
              onChange={handleChange}
            />
            <strong>
              {alphabet[index]}. {answer}
            </strong>
          </div>
        ))}
      </div>
      <div>
        <button
          className={styles.submit}
          onClick={() => {
            handleClick();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

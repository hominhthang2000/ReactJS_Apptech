import React from "react";

type Props = {};

export default function Handlevent({}: Props) {
  const [text, Settext] = React.useState("Hảy nhập vào đây");
  const [select, Setselect] = React.useState("Default");
  const [check, Setcheck] = React.useState(false);
  return (
    <div>
      <button
        onClick={() => {
          console.log("❤🤣");
        }}
      >
        Click me
      </button>
      <input
        onChange={(e) => {
          Settext(e.target.value);
        }}
      ></input>
      <select
        onChange={(e) => {
          Setselect(e.target.value);
        }}
      >
        <option value="Default">Default</option>
        <option value="REACTJS">REACTJS</option>
        <option value="VUE">VUE</option>
      </select>
      <input
        type="checkbox"
        onChange={(e) => {
          Setcheck(e.target.checked);
        }}
      ></input>
      <h1>{text}</h1>
      <div>{select !== "Default" && <p>Selected value: {select}</p>}</div>
      {check && (
        <div style={{ height: 200, width: 500, backgroundColor: "yellow" }}>
          one two three
        </div>
      )}
    </div>
  );
}
//const [selectedValue, setSelectedValue] = React.useState("default");

// const handleChange = (e:any) => {
//   setSelectedValue(e.target.value);
// };

// return (
//   <div>
//     <select value={selectedValue} onChange={handleChange}>
//       <option value="default">Default</option>
//       <option value="1">Option 1</option>
//       <option value="2">Option 2</option>
//     </select>

//     <div className={selectedValue === "default" ? "faded" : ""}>
//       {/* Nội dung hiển thị khi giá trị khác "default" */}
//       {selectedValue !== "default" && <p>Selected value: {selectedValue}</p>}
//     </div>
//   </div>
// );

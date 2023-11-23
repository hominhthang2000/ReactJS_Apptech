import React from "react";

type Props = {};

export default function BasicForm({}: Props) {
  const [name, setName] = React.useState("");
  const [addres, setaddress] = React.useState("");
  const [country, setCountry] = React.useState("");
  return (
    <div className="m-[20px] ">
      <h1 className="text-3xl font-bold">Basic form</h1>
      <form
        className=" mt-3 "
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ name, addres, country });
        }}
      >
        <div className="flex flex-col gap-3">
          <input
            className="border-solid border-[1px] border-[black]"
            type="text "
            placeholder="Enter Your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <input
            className="border-solid border-[1px] border-[black]"
            type="text "
            placeholder="Enter your place"
            onChange={(e) => {
              setaddress(e.target.value);
            }}
          ></input>
          <select
            className="  rounded border-solid border-[1px] border-[black]"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            <option value="VN"> Viet Nam</option>
            <option value="JP"> Japan</option>
            <option value="KR">Korea</option>
          </select>
          <button
            className="  rounded border-solid border-[1px] border-[black]"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

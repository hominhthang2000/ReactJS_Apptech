import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./Session2/Products";
import Button from "./Session2/Button";
import { FaHome } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { BiLogoGoogle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import IconButton from "./Session2/IconButton";
import TeamButton from "./Session2/TeamButton";
import PowerButton from "./Session2/PowerButton";
import BlockUI01 from "./Session2/BlockUI01";
import Rating from "./Session2/Rating";
import Rating10 from "./Session2/Rating10";
import Counter from "./Session3/Counter";
import LikeButton from "./Session3/LikeButton";
import SwitchButton from "./Session3/SwitchButton";
import CheckButton from "./Session3/CheckButton";
import Gallery from "./Session3/Gallery";
import Tab from "./Session3/Tab";
import RatingClick from "./Session3/Rating/Ratingclick";
import MoutingExample from "./Session3/LifecycleExample/MoutingExample";

//cơ chế hoạt động load trước của react
// const buttons: any[] = [];
// for (let i = 0; i < 1000; i++) {
//   buttons.push(
//     <TeamButton
//       title="Minh Thắng"
//       imgUrls={[
//         "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_BSXPlBjoBeJruSaCamv7kQuMNjoIIWX0CITXUVoapFCbRM9g",
//       ]}
//     />
//   );
// }
function App() {
  return (
    <div className="App">
      {/* {buttons.map((item) => {
        return item;
      })} */}
      <h1>Hello</h1>
      <Button text="Save" icon={<FaHome />} />
      <Button text="Update" color="#2980b9" />
      <Button text="Reset" color="#8e44ad" />
      <Button text="Delet" />
      <IconButton text="Get Started" iconRight={<AiOutlineArrowRight />} />
      <IconButton text="Continue with Apple" iconLeft={<AiFillApple />} />
      <IconButton text="Continue with Google" iconLeft={<BiLogoGoogle />} />
      <IconButton text="Continue with Facebook" iconLeft={<BsFacebook />} />
      <TeamButton
        title="Bảo Nam"
        imgUrls={[
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_BSXPlBjoBeJruSaCamv7kQuMNjoIIWX0CITXUVoapFCbRM9g",
        ]}
      />

      <TeamButton
        backgroundColor="#740EF5"
        title="Minh Tuấn"
        imgUrls={[
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_BSXPlBjoBeJruSaCamv7kQuMNjoIIWX0CITXUVoapFCbRM9g",
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_BSXPlBjoBeJruSaCamv7kQuMNjoIIWX0CITXUVoapFCbRM9g",
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_BSXPlBjoBeJruSaCamv7kQuMNjoIIWX0CITXUVoapFCbRM9g",
        ]}
        subTitle="Super start"
      />
      <TeamButton
        colortext="#000"
        backgroundColor="#FFF614"
        title="Bảo Nam"
        imgUrls={[
          "https://media.vov.vn/sites/default/files/styles/large/public/2021-01/tom_-_jerry.jpg",
          "https://media.vov.vn/sites/default/files/styles/large/public/2021-01/tom_-_jerry.jpg",
        ]}
      />
      <PowerButton status="on"></PowerButton>
      <PowerButton status="off"></PowerButton>
      <Products />
      <BlockUI01 />
      <Rating10 starts={3} />
      <Counter />
      <LikeButton />
      <SwitchButton />
      <CheckButton />
      <Gallery />
      <Tab />

      <MoutingExample />
    </div>
  );
}

export default App;
